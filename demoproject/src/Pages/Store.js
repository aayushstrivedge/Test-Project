// useEffect(() => {
//     const fetchWebsite = async () => {
//         try {
//             const response = await axios.get(
//                 "https://weatherapi-com.p.rapidapi.com/forecast.json",
//                 {
//                     params: { q: 'london' },
//                     headers: {
//                         'X-RapidAPI-Key': '9cfab92a85msh328829bff3865e3p1efa2ejsn6c0ae3b9e42f',
//                         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//                     }
//                 }
//             );
//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     fetchWebsite();
// }, []);


{/* <div>
                    <form action="" onSubmit={loginController}>
                        <label htmlFor="username">UserName</label>
                        <input type="text" id='username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} required />
                        <label htmlFor="password">Password</label>
                        <input type="text" id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <input type="submit" value="Login" name='Login' />
                    </form>
                </div> */}
