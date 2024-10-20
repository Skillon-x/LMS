import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SplitAuthLayout from './SplitAuthLayout';

const SignUp = () => {
  const [userType, setUserType] = useState('student');

  return (
    <SplitAuthLayout
      teacherContent={
        <p>Share your knowledge and earn by creating engaging courses.</p>
      }
      studentContent={
        <p>Access a world of knowledge with our expert-led courses.</p>
      }
    >
      <div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <div className="mt-8">
          <div className="flex justify-center space-x-4 mb-6">
            <button
              onClick={() => setUserType('student')}
              className={`px-4 py-2 rounded-md ${
                userType === 'student'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => setUserType('teacher')}
              className={`px-4 py-2 rounded-md ${
                userType === 'teacher'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              Teacher
            </button>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  userType === 'student' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="mt-6">
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </SplitAuthLayout>
  );
};

export default SignUp;