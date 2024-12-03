import UserInfo from "../components/userInfo";
import MyAds from "../components/myAds";
import React from 'react';

const userInfo = {
    name: 'Иван',
    email: 'mail@email.ru',
    phone: '89112345678',
    daysSinceRegistration: 100,
    adsAdded: 4,
    animalsFound: 2,
};

const MyAccount = () => {
    return (
        <div>
            <UserInfo data={userInfo} />
            <MyAds/>
        </div>
    );
};

export default MyAccount;