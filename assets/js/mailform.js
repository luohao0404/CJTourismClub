!function(exports) {

    function LForm() {
        this.param = {};
        this.__url = '';
    }
    LForm.prototype.setup = function() {
        var self = this;
        $("form").on("submit", function(e){
            $form = $(this);
            e.preventDefault();
            self.collect($form);
            self.post();
        });
        this.__url = window.location.href;
    };
    LForm.prototype.collect = function($form) {
        var self = this;
        $form.find("input,select,textarea").each(function(){
            $target = $(this);
            var __name = $target.attr("name");

            if ( $target.attr("type") === 'checkbox' ) {

                var checkboxValues = [];

                $form.find("input[name='"+__name+"']:checked").each(function(){
                    checkboxValues.push( $(this).val() );
                });
                self.param[ __name ] = checkboxValues.join(",");

            } else {
                self.param[ __name ] = $target.val();
            }
        });
        self.param['__url'] = self.__url;
        if ( /join/.test( window.location.href ) ) {
            self.param['form_mail_type'] = "join";
        }
    }; 
    LForm.prototype.post = function() {
        var self = this;
        $.ajax({
            type: "POST",
            url: "/mail.php",
            data: this.param,
            dataType: "json",
            success: function(xhr, res) {
                if ( self.__onSuccess ) { self.__onSuccess(xhr, res); }
            },
            error: function(err) {
                if ( self.__onError ) { self.__onError(err); }
            }
        });
    };
    LForm.prototype.onSuccess = function(callback) {
        this.__onSuccess = callback;
    };
    LForm.prototype.onError = function(callback) {
        this.__onError = callback;
    };
    exports.LForm = LForm;
}(window);


!function() {

    function setup() {
        var lform = new LForm();
        lform.setup();
        lform.onSuccess(function(xhr, res){
            console.log("lsuccess",res);
        });
        lform.onError(function(err){
            console.log("lerror",err);
        });
    }
    setup();
}();
