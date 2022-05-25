import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            axios.put(`http://localhost:5000/user/${email}`, currentUser).then(res => {
                console.log('data inside useToken', res);
                const accessToken = res.data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    }, [user]);
    return [token];
}

export default useToken;