import { useForm, SubmitHandler } from 'react-hook-form';
import { useAuthContext } from '../../hooks/useAuthContext';
import { FaGoogle } from 'react-icons/fa';

interface FormFields {
    email: string,
    password: string
}

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormFields>();
    const { login, error } = useAuthContext()

    const onSubmit: SubmitHandler<FormFields> = async (data: any) => {
        login(data)
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen">
            <div className="text-center w-full h-[10rem] flex flex-col items-center justify-center text-white bg-neutral-900  mb-8">
                <h1 className="text-5xl font-bold mb-2 ">Deck</h1>
            </div>
            <div className="w-full max-w-md p-8 space-y-3  bg-white ">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", {
                                required: 'Email is required',
                                pattern: /^\S+@\S+$/i
                            })}
                            className="w-full p-2 mt-1 border rounded-md"
                        />

                        <p className="mt-1 h-[1rem] text-xs text-red-500">
                            {errors.email && errors.email.message}
                        </p>

                    </div>
                    <div>
                        <label htmlFor="password" className="text-sm font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            {...register("password", {
                                required: 'Password is required',
                            })}
                            className="w-full p-2 mt-1 border rounded-md"
                        />
                        <p className="mt-1 h-[1rem] text-xs text-red-500">
                            {errors.password && errors.password.message}
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 mt-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700"
                    >
                        Sign In
                    </button>
                </form>
            </div>

            <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full  mb-2 transition-colors duration-200 ease-in-out">
                <FaGoogle className="mr-2" /> Sign in with Google
            </button>

            {!error.login && (
                    <div className="p-3 text-sm   rounded-md">
                        {error.login === 'Invalid Credentials' && error.login}
                        Invalid credentials
                    </div>
                )}
        </div>
    );
};

export default SignIn;
