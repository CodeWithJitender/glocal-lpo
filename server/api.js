import express from 'express';
const brevo = require('@getbrevo/brevo');

const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
	brevo.TransactionalEmailsApiApiKeys.apiKey,
	process.env.BREVO_API_KEY
);

const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const secret = '0x4AAAAAABY7kp2q4bP4MC5ibxXzEExBalM';

const apiRouter = express.Router();

const getClientEmailContent = (name) => {
	return `
		<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>New Message</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
<![endif]--><!--[if !mso]><!-- -->
  <link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet"><!--<![endif]--><!--[if mso]><xml>
    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
      <w:DontUseAdvancedTypographyReadingMail></w:DontUseAdvancedTypographyReadingMail>
    </w:WordDocument>
    </xml><![endif]-->
  <style type="text/css">#outlook a {
	padding:0;
}
.ch {
	mso-style-priority:100!important;
	text-decoration:none!important;
}
a[x-apple-data-detectors] {
	color:inherit!important;
	text-decoration:none!important;
	font-size:inherit!important;
	font-family:inherit!important;
	font-weight:inherit!important;
	line-height:inherit!important;
}
.bn {
	display:none;
	float:left;
	overflow:hidden;
	width:0;
	max-height:0;
	line-height:0;
	mso-hide:all;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:left } h2 { font-size:24px!important; text-align:left } h3 { font-size:20px!important; text-align:left }    .bq td a { font-size:12px!important } .cp p, .cp ul li, .cp ol li, .cp a { font-size:12px!important } .co p, .co ul li, .co ol li, .co a { font-size:16px!important } .cn p, .cn ul li, .cn ol li, .cn a { font-size:12px!important }  *[class="gmail-fix"] { display:none!important } .ck, .ck h1, .ck h2, .ck h3 { text-align:center!important }  .cl, .cl h1, .cl h2, .cl h3 { text-align:left!important } .cj img, .ck img, .cl img { display:inline!important }   .ce table, .cf, .cg { width:100%!important } .cb table, .cc table, .cd table, .cb, .cd, .cc { width:100%!important; max-width:600px!important }  .adapt-img { width:100%!important; height:auto!important }  .by { padding-right:0!important }    .bu { padding-bottom:20px!important } .bs, .bt { display:none!important }     .bq td { width:1%!important } table.bp, .esd-block-html table { width:auto!important } table.bo { display:inline-block!important } table.bo td { display:inline-block!important }                   .v { padding-right:20px!important } .u { padding-left:20px!important }                     }
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }</style>
 </head>
 <body data-new-gr-c-s-loaded="14.1233.0" style="width:100%;font-family:'Work Sans', Arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		<![endif]-->
   <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
     <tr>
      <td valign="top" style="padding:0;Margin:0">
       <table cellpadding="0" cellspacing="0" class="cc" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="cp" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" bgcolor="#00000000" role="none">
             <tr>
              <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:40px;padding-right:40px">
               </td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="cb" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="co" cellspacing="0" cellpadding="0" bgcolor="#070c1e" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#070c1e;width:600px" role="none">
             <tr>
              <td class="v u" align="left" style="padding:40px;Margin:0">
               <table cellspacing="0" cellpadding="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td class="by" valign="top" align="center" style="padding:0;Margin:0;width:520px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" class="cl" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://glocallpo.com/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#00356C;font-size:14px"><img src="https://www.glocallpo.com/assets/emailer/logo.png" alt="Glocal LPO" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" height="55" title="Glocal LPO"></a></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr>
              <td class="v u" align="left" style="padding:0;Margin:0;padding-top:30px;padding-left:40px;padding-right:40px"><!--[if mso]><table style="width:520px" cellpadding="0" cellspacing="0"><tr><td style="width:300px" valign="top"><![endif]-->
               <table cellspacing="0" cellpadding="0" align="left" class="cf" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                 <tr>
                  <td class="by bu" valign="top" align="center" style="padding:0;Margin:0;width:300px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0"><h1 style="Margin:0;line-height:43.2px;mso-line-height-rule:exactly;font-family:Marcellus, Arial, serif;font-size:36px;font-style:normal;font-weight:normal;color:#fff8f2">Thanks for Reaching Out.</h1></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td><td style="width:20px"></td><td style="width:200px" valign="top"><![endif]-->
               <table cellpadding="0" cellspacing="0" class="cg" align="right" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                 <tr class="bs">
                  <td align="left" style="padding:0;Margin:0;width:200px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" height="40" style="padding:0;Margin:0"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table><!--[if mso]></td></tr></table><![endif]--></td>
             </tr>
             <tr class="bs">
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:40px;padding-right:40px">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                   <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:2px solid #433636" role="presentation">
                     <tr>
                      <td align="center" height="50" style="padding:0;Margin:0"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
             <tr>
              <td class="v u" align="left" style="Margin:0;padding-top:30px;padding-bottom:30px;padding-left:40px;padding-right:40px">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td class="by bu" valign="top" align="center" style="padding:0;Margin:0;width:520px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Work Sans', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px"><strong>Dear ${name},</strong></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Work Sans', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px"><br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Work Sans', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px">Thank you for submitting your inquiry! We've received your message and one of our team members will be in touch with you shortly to discuss your needs.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Work Sans', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px"><br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Work Sans', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px">In the meantime, feel free to explore our services, and if you have any urgent questions, don't hesitate to reach out.</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Work Sans', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px"><br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Work Sans', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px">We look forward to connecting with you soon!</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Work Sans', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px"><br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Work Sans', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px">Best regards,</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Work Sans', Arial, sans-serif;line-height:21px;color:#c9b9b0;font-size:14px">The Glocal LPO Team<strong></strong></p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="cb" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table bgcolor="#070c1e" class="co" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#070c1e;width:600px" role="none">
             <tr>
              <td class="v u" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:40px;padding-right:40px">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                   <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#dec4a5" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#dec4a5;border-radius:20px 20px 0px 0px" role="presentation">
                     <tr>
                      <td align="center" class="ck" style="padding:0;Margin:0;padding-bottom:5px"><h2 style="Margin:0;line-height:28.8px;mso-line-height-rule:exactly;font-family:Marcellus, Arial, serif;font-size:24px;font-style:normal;font-weight:normal;color:#070c1e"><br></h2><h2 style="Margin:0;line-height:28.8px;mso-line-height-rule:exactly;font-family:Marcellus, Arial, serif;font-size:24px;font-style:normal;font-weight:normal;color:#070c1e">Glocal LPO</h2></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Work Sans', Arial, sans-serif;line-height:21px;color:#433636;font-size:14px">Think Global, Work Local.</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table class="cd" cellspacing="0" cellpadding="0" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="cn" cellspacing="0" cellpadding="0" bgcolor="#433636" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#433636;width:600px" role="none">
             <tr>
              <td class="v u" align="left" style="padding:0;Margin:0;padding-left:40px;padding-right:40px">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                   <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#dec4a5" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#dec4a5;border-radius:0px 0px 20px 20px" role="presentation">
                     <tr>
                      <td style="padding:0;Margin:0">
                       <table cellpadding="0" cellspacing="0" width="100%" class="bq" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr class="links-images-left">
                          <td align="center" valign="top" width="100%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:20px;padding-bottom:5px;border:0" id="esd-menu-id-0"><a target="_blank" href="mailto:info@glocallpo.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'Work Sans', Arial, sans-serif;color:#433636;font-size:12px"><img src="https://www.glocallpo.com/assets/emailer/envelope.png" alt="info@glocallpo.com" title="info@glocallpo.com" align="absmiddle" width="16" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-right:5px;vertical-align:middle">info@glocallpo.com</a></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td style="padding:0;Margin:0">
                       <table cellpadding="0" cellspacing="0" width="100%" class="bq" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr class="links-images-left">
                          <td align="center" valign="top" width="100%" style="Margin:0;padding-left:5px;padding-right:5px;padding-top:5px;padding-bottom:20px;border:0" id="esd-menu-id-1"><a target="_blank" href="tel:+16504072112" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:'Work Sans', Arial, sans-serif;color:#433636;font-size:12px"><img src="https://www.glocallpo.com/assets/emailer/mobilebutton.png" alt="+1 (650) 407 2112" title="+1 (650) 407 2112" align="absmiddle" width="16" style="display:inline-block !important;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;padding-right:5px;vertical-align:middle">+1 (650) 407 2112</a></td>
                         </tr>
                       </table></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-bottom:25px;font-size:0">
                       <table cellpadding="0" cellspacing="0" class="bp bo" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;padding-right:15px"><a target="_blank" href="https://www.instagram.com/glocallpo/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#DCE8F3;font-size:12px"><img src="https://www.glocallpo.com/assets/emailer/instagram-circle-colored.png" alt="Ig" title="Instagram" width="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                          <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank" href="https://www.linkedin.com/company/glocal-lpo/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:underline;color:#DCE8F3;font-size:12px"><img src="https://www.glocallpo.com/assets/emailer/linkedin-circle-colored.png" alt="In" title="Linkedin" width="24" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></a></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="cd" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="cn" cellspacing="0" cellpadding="0" bgcolor="#433636" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#433636;width:600px" role="none">
             <tr>
              <td align="left" style="Margin:0;padding-left:30px;padding-right:30px;padding-top:40px;padding-bottom:40px">
               <table cellspacing="0" cellpadding="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="left" style="padding:0;Margin:0;width:540px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Work Sans', Arial, sans-serif;line-height:18px;color:#DCE8F3;font-size:12px">B-73, Block B, Sector 57, Noida, Uttar Pradesh 201301, India</p></td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-bottom:5px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'Work Sans', Arial, sans-serif;line-height:18px;color:#DCE8F3;font-size:12px">© Glocal LPO. All Rights Reserved.</p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" class="cb" align="center" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table class="co" align="center" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none">
             <tr>
              <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:40px;padding-right:40px">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:520px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;display:none"></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table></td>
     </tr>
   </table>
  </div>
 </body>
</html>`;
};

const handleSendEmail = (formData, res) => {
	const {
		first_name,
		last_name,
		email,
		company,
		job_title,
		phone,
		service_info,
		page_url
	} = formData;

	const sendAdminEmail = new brevo.SendSmtpEmail();

	sendAdminEmail.subject = 'New Contact Query Received!';
	sendAdminEmail.htmlContent = `
		<html>
		<body>
			Dear Admin,<br /><br />
			At the outset Glocal LPO has received a new contact enquiry. Please find the details below:<br />
			First Name: ${first_name}<br />
			Last Name: ${last_name}<br />
			Email: ${email}<br />
			Company: ${company}<br />
			Job Title: ${job_title}<br />
			Phone: ${phone}<br />
			Service Info: ${service_info}<br />
			Page: ${page_url}<br /><br />
			Request you to please get in touch as soon as possible.<br /><br />
			Thank You.
		</body>
		</html>`;
	sendAdminEmail.sender = {
		email: 'info@glocallpo.com',
		name: 'Glocal LPO'
	};
	sendAdminEmail.to = [{
		email: "info@glocallpo.com",
		name: "Glocal LPO"
	}];
	sendAdminEmail.replyTo = {
		"email": email,
		"name": `${first_name} ${last_name}`,
	};

	const sendClientEmail = new brevo.SendSmtpEmail();

	sendClientEmail.subject = "Thanks for Reaching Out - We'll Get Back to You Soon!";
	sendClientEmail.htmlContent = getClientEmailContent(`${first_name} ${last_name}`);
	sendClientEmail.sender = {
		email: 'info@glocallpo.com',
		name: 'Glocal LPO'
	};
	sendClientEmail.to = [{
		email,
		name: `${first_name} ${last_name}`
	}];
	sendClientEmail.replyTo = {
		"email": 'info@glocallpo.com',
		"name": 'Glocal LPO'
	};

	Promise.all([
		apiInstance.sendTransacEmail(sendAdminEmail),
		apiInstance.sendTransacEmail(sendClientEmail)
	]).then(() => {
		res.send({
			success: true,
			message: "Thanks for Reaching Out - We'll Get Back to You Soon!",
		});
	}).catch(() => {
		res.status(500);
		res.send({
			success: false,
			message: "Sorry! Something went wrong."
		});
	});
}

apiRouter.post('/submit-form', (req, res) => {
  const { captchaToken } = req.body;

	fetch(verifyEndpoint, {
    method: 'POST',
    body: JSON.stringify({
      secret: secret,
      response: captchaToken
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
		.then((res) => res.json())
		.then(() => {
			handleSendEmail(req.body, res);
		})
		.catch(() => {
			res.status(500);
			res.send({
				success: false,
				message: "Recaptcha verification failed. Please try again."
			});
		});
});

apiRouter.post('/submit-small-form', (req, res) => {
  const { name, email, time, timezone, platform } = req.body;
  
	const sendAdminEmail = new brevo.SendSmtpEmail();

	sendAdminEmail.subject = 'New Contact Query Received!';
	sendAdminEmail.htmlContent = `
		<html>
		<body>
			Dear Admin,<br /><br />
			Glocal LPO has received a new request for scheduling a meeting with the client. Please find the details below:<br />
			Name: ${name}<br />
			Email: ${email}<br />
			Time: ${time}<br />
			Timezone: ${timezone}<br />
			Platform: ${platform}<br /><br />
			Request you to please get in touch as soon as possible.<br /><br />
			Thank You.
		</body>
		</html>`;
	sendAdminEmail.sender = {
		email: 'info@glocallpo.com',
		name: 'Glocal LPO'
	};
	sendAdminEmail.to = [{
		email: "info@glocallpo.com",
		name: "Glocal LPO"
	}];
	sendAdminEmail.replyTo = {
		email,
		name
	};

	const sendClientEmail = new brevo.SendSmtpEmail();

	sendClientEmail.subject = "Thanks for Reaching Out - We'll Get Back to You Soon!";
	sendClientEmail.htmlContent = getClientEmailContent(name);
	sendClientEmail.sender = {
		email: 'info@glocallpo.com',
		name: 'Glocal LPO'
	};
	sendClientEmail.to = [{
		email,
		name
	}];
	sendClientEmail.replyTo = {
		"email": 'info@glocallpo.com',
		"name": 'Glocal LPO'
	};

	Promise.all([
		apiInstance.sendTransacEmail(sendAdminEmail),
		apiInstance.sendTransacEmail(sendClientEmail)
	]).then(() => {
		res.send({
			success: true,
			message: "Thanks for Reaching Out - We'll Get Back to You Soon!",
		});
	}).catch(() => {
		res.status(500);
		res.send({
			success: false,
			message: "Sorry! Something went wrong."
		});
	});
});

export default apiRouter;
