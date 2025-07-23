import { useRef, useState } from "react";
import { HiExclamation } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const ForgotPw = () => {
  const correct='11223'
  const navigate = useNavigate()
  const [code, setCode] = useState<string[]>(["", "", "", "", ""]);
  const [msg, setMsg] = useState<string | null>(null);
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  const[verifying,setVerifying] = useState<boolean>(false)

  const codeInput = (index: number, value: string) => {
    
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCode: string[] = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < code.length - 1) {
        const nextInput = refs.current[index + 1];
        if (nextInput) nextInput.focus();
      }
      if(newCode.every((digit)=> digit !== '')) {
      verifyCode(newCode)
    }
    }
    
  };

  const handleKey = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !code![index] && index > 0) {
      const prevInput = refs.current[index - 1];
      if (prevInput) prevInput.focus();
    }
  };

  const verifyCode = (enteredCode?: string[]) => {
    setVerifying(true)
    const currCode= enteredCode?.join("") ?? code.join("");
    if (currCode ===correct) {
      
      setVerifying(false);
      navigate("/reset-password")
    } else {
      setMsg("Wrong code");
      setVerifying(false)
    }
  };

  return (
    <div className="pt-20 flex justify-start items-center h-[100dvh] px-8">
      <div className="flex flex-col gap-6">
        <p className="font-bold text-3xl sm:text-4xl md:text-5xl">
          Enter the code sent to your email
        </p>
        <p className="text-xl sm:text-2xl">
          We have sent a verification code, enter it below to reset your
          password
        </p>
        <div className="flex *:font-bold *:text-center disabled:text-neutral-400 *:p-2 *:text-4xl *:bg-neutral-100 *:focus:border-emerald-400 *:transition duration-200 *:caret-emerald-500 *:outline-none *:border *:w-[25%] *:sm:w-[5%] *:rounded-xl *:border-b-2 *:border-neutral-300 gap-2">
          {code?.map((_, index: number) => (
            <input
              inputMode="numeric"
              disabled={verifying}
              type="text"
              key={index}
              onKeyDown={(e) => handleKey(index, e)}
              ref={(ref) => {refs.current[index] = ref}}
              onChange={(e) => codeInput(index, e.target.value)}
              maxLength={1}
              pattern="\d*"
            />
          ))}
        </div>
       

        <a className="text-neutral-400 text-xl">Didn't receive a code?</a>

         {
          msg && <p className="flex gap-2 text-red-500 items-center"><HiExclamation/> {msg}</p>
        }
      </div>
    </div>
  );
};

export default ForgotPw;
