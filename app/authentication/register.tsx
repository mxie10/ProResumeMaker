import AuthHeader from "../component/header/AuthHeader";
import InputWithLabel from "../component/input/Input";
import registerFieldsHeader from "../static/register";
import ButtonWithLabelAndIcon from "../component/input/Button";
import { FcGoogle } from 'react-icons/fc';

interface ResgiterProps {

}

const Register:React.FC<ResgiterProps> = (props) => {
    return (
        <div 
            className="
                w-full 
                min-h-screen
                flex
                items-center
                justify-center
                bg-neutral-100
            "
        >
            <div
                className="
                    flex 
                    flex-col 
                    justify-center 
                    items-center
                    w-full
                    md:w-1/3
                "
            >
                <AuthHeader title="ProResuMaker" header="Join our community" subHeader="Start your journy with our product"/>
                <div className="mt-6">
                    {
                        registerFieldsHeader.map((item,index)=>{
                            return (
                                <div className="mt-4">
                                    <InputWithLabel 
                                        key={index} 
                                        label={item.label} 
                                        inputType={item.inputType} 
                                        inputID={item.inputID} 
                                        placeHolder={item.placeHolder}
                                    />
                                </div>
                            )
                        })
                    }
                    <div className="relative left-40 mt-4 text-xs">Forgot your password?</div>
                </div>
                <div className='w-3/5 mt-4'>
                    <ButtonWithLabelAndIcon name="Sign Up" />
                    {/* <ButtonWithLabelAndIcon icon={FcGoogle}/> */}
                </div>
            </div>
        </div>
    )
}

export default Register;