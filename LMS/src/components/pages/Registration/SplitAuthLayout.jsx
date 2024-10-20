import React from 'react';

const SplitAuthLayout = ({ children, teacherContent, studentContent }) => {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {children}
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 h-full w-full object-cover">
          <div className="h-full w-full flex">
            <div className="w-1/2 bg-blue-600 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h2 className="text-3xl font-bold mb-4">For Teachers</h2>
                {teacherContent}
              </div>
            </div>
            <div className="w-1/2 bg-green-600 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h2 className="text-3xl font-bold mb-4">For Students</h2>
                {studentContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitAuthLayout;