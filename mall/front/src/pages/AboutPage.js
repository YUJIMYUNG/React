import React from 'react';
import { Link } from 'react-router-dom';
import BasicLayout from '../layouts/BasicLayout';

//자동완성 단축키 rsc
const AboutPage = () => {
    return (
        <BasicLayout>
             <div className={'text-3xl'}>About</div>
        </BasicLayout>
    );
};

export default AboutPage;