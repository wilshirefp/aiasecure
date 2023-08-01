import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey('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'); //process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    //console.log("sendgrid");
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "njohnson@wilshirefp.com", 
      from: "dpelgrim@wilshirelender.com", 
    //   subject: `${req.body.subject}`,
      subject: `New AIASecure Contact`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Email Campaign</title>
        <meta name="description" content="lead contact request">
        <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        <link rel="stylesheet" href="css/styles.css?v=1.0"> 
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h3>You've got a new mail</h3>
                <h3>firstName: ${req.body.firstName}</h3> 
                <h3>LastName:${req.body.lastName}</h3>
                <h3>Phone number: ${req.body.phone}</h3>
                <h3>email: ${req.body.email} </h3>
                <div style="font-size: 16px;">
                <p>Message:</p>
                <p>${req.body.message}</p>
                <br>
                <p>Investor:${req.body.investor}</p>
                <br>
              </div>
        </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;