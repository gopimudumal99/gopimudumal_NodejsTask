//Create Token and saving in cookie 

const sendToken = (psychiatrist, statusCode, res) => { 

    const token = psychiatrist.getJWTToken();

    //Options for Cookies
    const options = {
        exprires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        psychiatrist,
        token
    })

}

module.exports = sendToken