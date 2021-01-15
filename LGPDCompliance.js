(function ($) {
    $.fn.LGPDCompliance = function (options) {

        //First of all, verify if user already had accepted
        $cookies = document.cookie.split(';')

        for ($cookiesIndex in $cookies) {
            $cookie = $cookies[$cookiesIndex].split('=');
            $cookieName = $cookie[0].trim();
            $cookieValue = $cookie[1].trim();

            //If user already had accepted the agrement, we can exit
            if ($cookieName === "LGPDComplianceAgreed" && $cookieValue === 'true') {
                return;
            }
        };

        // Just to assure that we will not face a "cannot read property of undefined"
        typeof options === 'undefined' ? options = {} : options = options;
        typeof options.box === 'undefined' ? options.box = {} : options.box = options.box;
        typeof options.button === 'undefined' ? options.button = {} :  options.button = options.button;


        //If user never accepted the agrement, we can continue and show the message

        var $box, $button, $message, $buttonText, $boxStyle, $buttonStyle,
            $cookiePolicyName, $cookiePolicyURL, $cookiePolicyTarget, $cookiePolicyElement,
            $privacyPolicyName, $privacyPolicyURL, $privacyPolicyTarget, $privacyPolicyElement;


        //Start handling the message.
        $message = options.message || "Este site utiliza Cookies para uma melhor experiência de uso. Ao continuar navegando, você concorda com nossas políticas de /cookie e de /privacy.";

        $cookiePolicyURL = options.cookiePolicyURL || "#";
        $privacyPolicyURL = options.privacyPolicyURL || "#";

        $cookiePolicyTarget = options.cookiePolicyTarget || "_blank";
        $privacyPolicyTarget = options.privacyPolicyTarget || "_blank";

        $cookiePolicyName = options.cookiePolicyName || "cookies";
        $privacyPolicyName = options.privacyPolicyName || "privacidade";

        $cookiePolicyElement = "<a href='" + $cookiePolicyURL + "' target='" + $cookiePolicyTarget + "'>" + $cookiePolicyName + "</a>";
        $privacyPolicyElement = "<a href='" + $privacyPolicyURL + "' target='" + $privacyPolicyTarget + "'>" + $privacyPolicyName + "</a>";

        $message = $message.replace("/cookie", $cookiePolicyElement);
        $message = $message.replace("/privacy", $privacyPolicyElement);

        $message = $.parseHTML($message);


        //Second, handle the button.
        $buttonText = options.button.text || "Entendi";

        $button = "<button id='lgpd_compliance_agreed'>" + $buttonText + "</button>";

        $buttonStyle = {
            "border": 0,
            "background": options.button.background || "#777",
            "color": options.button.color || "#fff",
            "font-weight": "bold",
            "display": "block",
            "width": "100%",
            "padding": "10px",
            "margin": "10px 0px"
        };

        $button = $.parseHTML($button);
        $($button).css($buttonStyle);


        //Third, the box styles.
        $boxStyle = {
            "display": "none",
            "width": "300px",
            "font-family": "sans-serif",
            "padding": "15px 20px",
            "position": "fixed",
            "bottom": "5%",
            "left": "5%",
            "z-index": "99999999",
            "border-radius": "5%",
            "background": options.box.background || "#fff",
            "color": options.box.color || "#777"
        };

        //Last, puts all together - message + button inside the box, and show it.
        $box = $.parseHTML("<div id='lgpd_compliance'></div>");
        $($box).append($message);
        $($box).append($button);
        $($box).css($boxStyle);

        $('body').append($box);

        $('#lgpd_compliance').slideDown(500);

        // Finish adding a listner for "agree button"
        $('#lgpd_compliance_agreed').on('click', function(){

            // Set expiration date to one year
            var $expDate = new Date();
            $expDate.setDate($expDate.getDate() + (options.expires || 365));
            
            // Save a cookie
            document.cookie = 'LGPDComplianceAgreed=true; path=/; expires=' + $expDate.toUTCString();

            // Hides the box
            $('#lgpd_compliance').slideUp(500);
        });
    };
}(jQuery));