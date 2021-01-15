# LGPD Compliance jQuery Plugin
### This plugin intends to show a small pop-up notice to inform user that the website uses some cookies and let him access the Cookie Policy and Privacy Policy - to compliant with GDPR acts around the world.  
*Note: **LGPD** stands for 'Lei Geral de Proteção de Dados', brazilian version of **EU GDPR**.  

This plugin is distributed under GNU GPL v3.0 license, wich allows you to a commercial use, modificate, distribute, use in private and patented softwares but this not represent any type of liability or implies any warranty. Use this plug-in "as it is" - a license and copyright must be noticed. Full license can be found <a href="/LICENSE">here</a>

---

## Dependencies  
This plugin depends only jQuery (All versions) to run. 

---

## Usage
After include jQuery library, simple call the code below and the plugin will display a message box with an agree button - both in brazilian portuguese.  
```JavaScript
$(document).ready(function(){
  $('body').LGPDCompliance(); 
});
```

When user clicks on agree button, the plugin will store a cookie will in domain context with a year expiration date and will not be shown until there.

---

## Customization
To customize the pop-up to your needs, send parameters through a JSON object in plugin initialization.
Here are the accepted parameters, its formats and default values (all of them are optional):
```JavaScript
$(document).ready(function(){
  $('body').LGPDCompliance({
    message: "The message itself",                         // The message that will be show.
    cookiePolicyURL: "https://my-cookie-usage-policy.com", // The Cookie Usage Policy URL.
    privacyPolicyURL: "https://my-privacy-policy.com",     // The Privacy Policy URL.
    cookiePolicyTarget: "_blank",                          // The target for cookie usage policy link - default is _blank
    privacyPolicyTarget: "_blank",                         // The target for privacy policy link - default is _blank
    cookiePolicyName: "cookies",                           // The display name for cookie - default is cookies (It also will be used to create the link)
    privacyPolicyName: "privacidade",                      // The display name for privacy - default is privacidade (It also will be used to create the link)
    expires: 365,                                          // Agreement cookie expiration time
    button: {
      text: "Entendi",                                     // The display text for agree button - default is Entendi
      background: "#777",                                  // Button background color 
      color: "#fff"                                        // Button text color
    },
    box: {
      background: "#fff",                                  // Box background color 
      color: "#777"                                        // Button text color
    }
  }); 
});
```

*On message, you can use `/cookie` and `/privacy` to replace with the respective link - it will be created using `cookiePolicyName` and `privacyPolicyName`, for example:
``` JavaScript
// Using
{
  message:          "To continue you must accept our /cookies and /privacy.",
  
  cookiePolicyName: "cookies policy",
  privacyPolicyName: "privacy policy",
  
  cookiePolicyURL: "/cookie-usage",
  privacyPolicyURL: "/privacy-policy"
}
```
Will output...
``` HTML
To continue you must accept our <a href="/cookie-usage" target="_blank">cookies policy</a> and <a href="/privacy-policy" target="_blank">privacy policy</a>.
```
...and will be rendered as:  
> To continue you must accept our <a href="https://your-awesome-site-here/cookie-usage" target="_blank">cookies policy</a> and <a href="https://your-awesome-site-here/privacy-policy" target="_blank">privacy policy</a>.

---

## Issues
If you don't see any pop-up, first check in your cookies for `LGPDComplianceAgreed` with a `true` value - once accepted, the pop-up will not show again. 
Any other issues can be reported in <a href='//github.com/gmuraoka/LGPD-Compliance/issues' target="_blank">issues area</a>.

---

### This plug-in still being developed and any contributions are welcomed through pull requests.
