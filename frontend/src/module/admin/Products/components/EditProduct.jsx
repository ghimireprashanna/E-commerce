import React, { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import {object, string, ref, number} from 'yup';
import {useFormik} from 'formik';
import axios from 'axios';

const EditProduct = ({user, product, setShowModal, updateProductApi, addProductApi}) => {
    let userSchema = object({
      title: string().required(),
      description: string().required(),
      price: number().required(),
      discounted_price: number().required()
    });

    const formik = useFormik({
      validationSchema: userSchema,
      initialValues: {
        title: product?.title || '',
        description: product?.description || '',
        brand: product?.brand || undefined,
        price: product?.price || 0,
        discounted_price: product?.discounted_price || 0,
      },
      onSubmit: (data) => {
        console.log({product : product});
        if (product) {
            updateProductApi({ ...product, ...data })
        } else {
            addProductApi(data)
        }
        setShowModal(false)
    }
    })
    const { errors,getFieldProps } = formik

   
  return (
    <section>
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
            
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
          {product ? 'Edit Product' : 'Add Product'}
          </h2>
          
          <form noValidate onSubmit={formik.handleSubmit} className="mt-8">
            <div className="space-y-5">
            <div>
                                    <label htmlFor="title" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Title{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Title"
                                            id="title"
                                            {...getFieldProps('title')}
                                        ></input>
                                    </div>
                                    {
                                        errors.title &&
                                        <label className="text-sm text-red-700 ">
                                            {errors.title}
                                        </label>
                                    }

                                </div>
                                <div>
                                    <label htmlFor="description" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Description{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Description"
                                            id="description"
                                            {...getFieldProps('description')}
                                        ></input>
                                    </div>
                                    {
                                        errors.description &&
                                        <label className="text-sm text-red-700 ">
                                            {errors.description}
                                        </label>
                                    }
                                </div>
                                <div>
                                    <label htmlFor="price" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Price{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="number"
                                            placeholder="Price"
                                            id="price"
                                            {...getFieldProps('price')}
                                        ></input>
                                    </div>
                                    {
                                        errors.price &&
                                        <label className="text-sm text-red-700 ">
                                            {errors.price}
                                        </label>
                                    }
                                </div>
                                <div>
                                    <label htmlFor="discounted_price" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Discounted Price{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="number"
                                            placeholder="Discounted Price"
                                            id="discounted_price"
                                            {...getFieldProps('discounted_price')}
                                        ></input>
                                    </div>
                                    {
                                        errors.discounted_price &&
                                        <label className="text-sm text-red-700 ">
                                            {errors.discounted_price}
                                        </label>
                                    }
                                </div>
              
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  {product ? 'Edit Product' : 'Add Product'} <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default EditProduct