import {NextPage, NextPageContext} from 'next';

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({statusCode}: ErrorProps): JSX.Element => {
  return (
    <>
      <p>
        {statusCode
          ? `An error ${statusCode} has occured on server` : "An error has occured"}
      </p>
    </>
  )
}

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
