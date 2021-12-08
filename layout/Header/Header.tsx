import {HeaderProps} from "./Header.props";
import cn from "classnames";
import Logo from '../logo.svg';
import styles from './Header.module.css';
import {ButtonIcon} from "../../components/ButtonIcon/ButtonIcon";
import { motion } from "framer-motion";
import {Sidebar} from "../Sidebar/Sidebar";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export const Header = ({className ,...props}: HeaderProps): JSX.Element => {

    const router = useRouter();
    const [isOpened, setIsOpened] = useState<boolean>(false);

    useEffect(() => {
        setIsOpened(false);
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x: 0,
            transition: {
                stiffness: 20
            },
        },
        closed: {
            opacity: 1,
            x: "100%",
        }
    };

    return (
        <header className={cn(className, styles.header)} {...props}>
            <Logo/>
            <ButtonIcon icon={'menu'} appearance={'white'} onClick={() => setIsOpened(true)}/>
            <motion.div
                animate={isOpened ? "opened" : "closed"}
                initial={"closed"}
                variants={variants}
                className={styles.mobileMenu}>
                <Sidebar/>
                <ButtonIcon className={styles.menuClose} icon='close' appearance='white' onClick={() => setIsOpened(false)}/>
            </motion.div>
        </header>
    );
};