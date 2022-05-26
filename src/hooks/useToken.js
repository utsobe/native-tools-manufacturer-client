import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            axios.put(`https://damp-tor-10320.herokuapp.com/user/${email}`, currentUser).then(res => {
                const accessToken = res.data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    }, [user]);
    return [token];
}

export default useToken;