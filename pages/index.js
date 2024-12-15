//middleware.js
export function middleware(req) {
  // Example middleware that could trigger an error, leading to a silent failure in getStaticProps or getServerSideProps
  return NextResponse.next();
}

//pages/index.js
import { getStaticProps } from 'next';

export async function getStaticProps(){
  try {
    // Simulate an error
    const response = await fetch('https://api.example.com/data');

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error('Error in getStaticProps:', error);  // Ensure logging of errors
    // Handle the error appropriately, such as returning a fallback page or error page
    return { notFound: true }; // Or return an error page props
  }
}

function HomePage({ data }) {
  return <div>Hello, Next.js 15</div>;
}

export default HomePage;