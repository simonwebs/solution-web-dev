// @ts-nocheck
import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { ErrorAlert } from '../../components/alerts/ErrorAlert';
import { SuccessAlert } from '../../components/alerts/SuccessAlert';

export const PostForm = () => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState('');

  const showError = ({ description }) => {
    setError(description);
    setTimeout(() => {
      setError('');
    }, 5000);
  };

  // eslint-disable-next-line no-shadow
  const showSuccess = ({ description }) => {
    setSuccess(description);
    setTimeout(() => {
      setSuccess('');
    }, 5000);
  };

  const savePost = () => {
    Meteor.call(
      'posts.insert',
      {
        title: 'My post',
        imageUrl: './img/simon.png',
        description: 'This is my first post',
        author: 'Simon Agbey',
        url: 'https://res.cloudinary.com/swed-dev/image/upload/v1664221647/ghf_images/goodsamaritan_gusqtp.jpg',
        category: 'article',
        date: '13/11/22',
      },
      (errorResponse) => {
        if (errorResponse) {
          showError({ message: errorResponse.error });
        } else {
          setTitle('');
          setUrl('');
          setImageUrl('');
          setDate('');
          setAuthor('');
          setDescription('');

          showSuccess({ message: 'Your Post saved and publish.' });
        }
      },
    );
  };

  return (
    <>
      <section className="pt-10 pb-36 px-8 bg-transparent dark:bg-slate-900 rounded-lg py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mt-20 text-primary dark:text-tertiaryOne"
            data-aos="fade-left"
          >
            Post Form
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto shadow-sm shadow-cyan-900/50">
          <div className="relative z-20 bg-primary dark:bg-slate-900 rounded-lg p-8">
            <form action="">
              {error && <ErrorAlert description={error} />}
              {success && <SuccessAlert description={success} />}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <input
                  type="url"
                  label="Image Url"
                  id="url"
                  value={url}
                  placeholder="Image Url"
                  onChange={(e) => setUrl(e.target.value)}
                />
                <input
                  id="category"
                  label="Category"
                  type="text"
                  placeholder="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />

                <input
                  id="title"
                  label="title"
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                  id="description"
                  label="Message"
                  type="description"
                  rows={2}
                  placeholder="Add your Message"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />

                <input
                  id="author"
                  label="Author"
                  type="text"
                  placeholder="Author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />

                <input
                  type="url"
                  id="imageUrl"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.files)}
                  placeholder="Image"
                />
                <input
                  id="date"
                  label="Date"
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <button
                type="button"
                onClick={savePost}
                data-aos="fade-left"
                className="mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150"
              >
                <span>Publish</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
