import { useState } from 'react';
import { toast } from 'sonner';

const TrainingSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!');
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return (
    <section className='bg-gray-100 py-16 px-4 dark:bg-gray-800'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
          Subscribe for GIS Data Analysis and IRM Training
        </h2>
        <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
          Get notified about our upcoming training sessions, workshops, and events.
        </p>
        <form onSubmit={handleSubmit} className='mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            className='w-full max-w-md rounded-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
            required
          />
          <button
            type='submit'
            className='w-full rounded-md bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto'
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default TrainingSubscription;