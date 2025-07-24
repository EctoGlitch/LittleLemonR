import React from 'react';
import { ErrorMessage, useFormikContext, Field } from 'formik';

function Radio({ label1, value1, label2, value2, name, touched, error }) {
  const { field } = useFormikContext();

  return (
    <>
    <div className="w-full">
      <div id="my-radio-group" className='font-p text-black font-bold'>Seating Options: </div>
          <div role="group">
            <label className='w-full h-[60px] py-4 flex flex-row-reverse justify-between align-middle'>
              <Field type="radio" name={ name } value={ value1 } />
              <p className='text-black font-p'>{ label1 }</p>
            </label>
            <label className='w-full h-[60px] py-4 flex flex-row-reverse justify-between align-middle'>
              <Field type="radio" name={ name } value={ value2 } />
              <p className='text-black font-p'>{ label2 }</p>
            </label>
          </div>
          {touched && error ? (
                <div className='h-10 text-red-700 py-4'>
                    <ErrorMessage className='error font-p font-semibold' name={ name } component="div" />
                </div>) : (
                <div className='h-10 text-red-700 py-4'></div>
                )
            }
    </div>
    </>
  );
}

export default Radio;
