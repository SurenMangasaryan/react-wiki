import React, { createContext, useEffect, useState } from 'react'

export const MyContext = createContext()

export default function Context({ children }) {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [eyeBool, setEyeBool] = useState(false);
    const [bool, setBool] = useState(false);
    const [searchInp, setSearch] = useState('');
    const [findArr, setFindArr] = useState([]);
    let timeOut;
    let request;

    const formFunc = (evt) => {
        evt.preventDefault();
        setLogin('');
        setEmail('');
        setPassword('');
        setItemInLocal();
    }

    const setItemInLocal = () => {
        if (login.length > 3 && email.length > 6 && password.length > 6) {
            localStorage.setItem('User', JSON.stringify({
                login: login,
                email: email,
                password: password
            }));
            setBool(!bool);
        }
    }

    function validation(value, length) {
        if (value.value.length > length) {
            value.style.background = 'green'
        } else {
            value.style.background = 'rgb(3, 17, 92)'
        }
    }

    const changeLogin = (evt) => {
        setLogin(evt.target.value);
        validation(evt.target, 3);
    }

    const changeEmail = (evt) => {
        setEmail(evt.target.value);
        validation(evt.target, 6);
    }

    const changePassword = (evt) => {
        setPassword(evt.target.value);
        validation(evt.target, 6);
    }

    const changePasswordProperty = () => {
        setEyeBool(!eyeBool);
    }

    const searchFrom = (evt) => {
        evt.preventDefault();
        request();
    }

    const serachFunc = (evt) => {
        setSearch(evt.target.value)
    }


    useEffect(() => {
        request = () => {
            timeOut = setTimeout(() => {
                fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${searchInp}`)
                    .then(result => result.json())
                    .then(result => setFindArr(result.query.search));
            }, 500);

            return () => {
                clearTimeout(timeOut);
            }
        }

    }, [searchInp])


    const Values = {
        login,
        email,
        password,
        bool,
        eyeBool,
        formFunc,
        changeLogin,
        changeEmail,
        changePassword,
        changePasswordProperty,
        searchInp,
        findArr,
        searchFrom,
        serachFunc,
    }

    return (
        <MyContext.Provider value={Values}>
            {children}
        </MyContext.Provider>
    )
}
