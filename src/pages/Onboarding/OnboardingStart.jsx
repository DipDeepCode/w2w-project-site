import styles from './onboardingStart.module.scss';
import Button from '../../components/Button/Button';
import Cross from '../../components/Svg/Cross';
import { nameButtonNext } from '../../datas/datas';
import { useNavigate } from "react-router-dom";



const OnboardingStart = () => {

    const navigate = useNavigate();


    return (
        <>
            <div className={styles.wrapperHead}>
                <Cross click={() => navigate("/choose-role")} className={styles.cross} />
            </div>
            <div className={styles.wrapperBody}>
                <div className={styles.body}>Онбординг START</div>
            </div>
            <div className={styles.wrapperButton}>
                <Button click={() => navigate("/onboarding-second")} name={nameButtonNext} className={styles.button} />
            </div>
        </>
    )
};

export default OnboardingStart;