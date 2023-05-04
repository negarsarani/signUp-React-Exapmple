import React, { useState } from 'react';
import { BsEnvelope } from 'react-icons/bs';
import { MdOutlinePeopleOutline } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
import { TiTickOutline } from 'react-icons/ti';
import Input from '../components/Input';
import { formDatatype } from '../types/type';

function Form() {
  const [FormMain, setFormMain] = useState<formDatatype>({
    username: '',
    email: '',
    password: '',
    repeatPass: '',
  });

  const [Errors, setErrors] = useState<formDatatype>({});
  const [isValid, setIsvalid] = useState<boolean>(false);

  const onChangeHandler = (event: any) => {
    const { name, value } = event.target;
    setFormMain({ ...FormMain, [name]: value });
  };

  const validateForm = (name: string) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    switch (name) {
      case 'email':
        if (FormMain.email.trim() === '') {
          Errors.email = 'Email required!';
        } else if (!regex.test(FormMain.email)) {
          Errors.email = 'Email not valid!';
        } else {
          Errors.email = '';
        }
        setErrors({ ...Errors });

        break;
      case 'password':
        if (FormMain.password.trim() === '') {
          Errors.password = 'Password is required!';
        } else if (FormMain.password.length < 4) {
          Errors.password = ' should greater than 4 characters!';
        } else {
          Errors.password = '';
        }
        setErrors({ ...Errors });
        break;

      case 'repeatPass':
        if (FormMain.repeatPass === '') {
          Errors.repeatPass = 'Please reapet the password!';
        } else if (FormMain.repeatPass !== FormMain.password) {
          Errors.repeatPass = 'Password not matched!';
        } else {
          Errors.repeatPass = '';
        }
        setErrors({ ...Errors });

        break;
      case 'username':
        if (FormMain.username.trim() === '') {
          Errors.username = 'Username required!';
        } else if (FormMain.username.length < 2) {
          Errors.username = ' At least 2 characters';
        } else {
          Errors.username = '';
        }
        setErrors({ ...Errors });

        break;
      default:
    }
    handleError();
  };
  const handleError = () => {
    const errArray = Object.values(Errors).map((item) => item === '');
    const formArray = Object.values(FormMain).map((item) => item !== '');
    setIsvalid((prev) => {
      if (
        errArray.every((item) => item === true) &&
        formArray.every((item) => item === true)
      ) {
        return (prev = true);
      } else {
        return (prev = false);
      }
    });
  };
  const onSubmitHandler = (event: Event) => {
    event.preventDefault();
    handleError();
    if (isValid) {
      console.log('SugnUpForm:', FormMain);
      FormMain.email = '';
      FormMain.password = '';
      FormMain.repeatPass = '';
      FormMain.username = '';
      setFormMain({ ...FormMain });
      setTimeout(() => {
        alert('Your login is complete!');
      }, 10);
    } else {
      validateForm('email');
      setTimeout(() => {
        alert('please complete the fields!');
      }, 10);
    }
  };

  return (
    <div className="mx-auto mt-10 w-fit bg-[#fdecf6] rounded-md w-2/6 p-4">
      <div className="flex items-center justify-center gap-4 m-8">
        <span className="text-purple-600 cursor-pointer">Sign in</span>

        <span className="text-white px-6 py-2 rounded cursor-pointer bg-purple-600 ">
          Sign Up
        </span>
      </div>

      <form className="flex flex-col gap-4 " onSubmit={onSubmitHandler}>
        <div className="  px-2 rounded-md flex flex-col items-center justify-center">
          <div className="  px-2 rounded-md flex bg-white items-center justify-center">
            <BsEnvelope className="text-gray-500 flex items-center justify-center" />
            <Input
              type="email"
              placeholder={'Email'}
              name="email"
              value={FormMain.email}
              onChangeHandler={onChangeHandler}
              error={Errors.email}
              validateForm={validateForm}
            />
          </div>

          <span className="text-red-500">{Errors.email}</span>
        </div>
        <div className="flex items-center flex-col px-2 ">
          <div className=" px-2 rounded-md flex bg-white items-center justify-center">
            <MdOutlinePeopleOutline className="text-gray-500 " />
            <Input
              type="text"
              placeholder={'User Name'}
              name="username"
              value={FormMain.username}
              onChangeHandler={onChangeHandler}
              error={Errors.username}
              validateForm={validateForm}
            />
          </div>
          <span className="text-red-500">{Errors.username}</span>
        </div>
        <div className="flex items-center flex-col px-2">
          <div className="px-2 rounded-md flex bg-white items-center justify-center">
            <AiFillLock className="text-gray-500 " />
            <Input
              placeholder={'Password'}
              name="password"
              type="password"
              value={FormMain.password}
              onChangeHandler={onChangeHandler}
              error={Errors.Password}
              validateForm={validateForm}
            />
          </div>
          <span className="text-red-500">{Errors.password}</span>
        </div>
        <div className="flex items-center px-2 flex-col rounded-md">
          <div className="px-2 rounded-md flex bg-white items-center justify-center">
            <TiTickOutline className="text-gray-500 " />
            <Input
              error=""
              placeholder={'Confirm Password'}
              name="repeatPass"
              type="password"
              value={FormMain.repeatPass}
              onChangeHandler={onChangeHandler}
              validateForm={validateForm}
            />
          </div>
          <span className="text-red-500">{Errors.repeatPass}</span>
        </div>
        <div className="">
          <button
            className="w-full px-6 py-2 text-white bg-purple-600 rounded mt-6"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
