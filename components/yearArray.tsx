// import Link from 'next/link';
import React from 'react';
import pf from '/Users/soliavalentine/anti-resume-project/public/snoop.jpeg';
import IDCard from '../components/idcard';
// import MainLayout from '../components/MainLayout';
import styles from '../styles/gallery.module.css';


// interface yearProps {
//     profile: object;
// }
const YearArray = (/*{ profile }*/) => {
    // let dict = {}
    // profile.names.map()
    // dict[]
    return (
            <div className={styles.main}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
                    <IDCard image={pf.src} year={2022} name="condoleeza rice" bio="failed :/" />
                    <IDCard image={pf.src} year={2022} name="condoleeza rice" bio="failed :/" /> <IDCard image={pf.src} year={2022} name="condoleeza rice" bio="failed :/" />
                    <IDCard image={pf.src} year={2022} name="condoleeza rice" bio="failed :/" /> <IDCard image={pf.src} year={2022} name="condoleeza rice" bio="failed :/" />
                    <IDCard image={pf.src} year={2022} name="condoleeza rice" bio="failed :/" /> <IDCard image={pf.src} year={2022} name="condoleeza rice" bio="failed :/" />
                    <IDCard image={pf.src} year={2022} name="condoleeza rice" bio="failed :/" /> <IDCard image={pf.src} year={2022} name="condoleeza rice" bio="failed :/" />
                    <IDCard image={pf.src} year={2022} name="condoleeza rice" bio="failed :/" />
                </div>
            </div>
    );
};
export default YearArray;