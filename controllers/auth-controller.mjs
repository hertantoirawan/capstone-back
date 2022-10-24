export default function initAuthenticationController(db) {
  const redirect = async (req, res) => {
    console.log('great success');
    console.log(req.user);

    const { username } = req.user;

    res.redirect(`${process.env.APP_LOGIN_URL}?userId=&username=${username}&accessToken=`);
  };

  return {
    redirect,
  };
}
