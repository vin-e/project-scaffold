import { preloadQuery } from '~/utils/urql';
import Test, { query } from '~/components/Test';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) =>
	preloadQuery(context, { query });

export default Test;
