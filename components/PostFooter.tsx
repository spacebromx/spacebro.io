import Link from 'next/link'

interface IProps {
  url: string
  readingText: string
  onClick?: () => void
}

const PostFooter = ({ url = '', readingText, onClick }: IProps) => {
  return (
    <>
      <Link href={url}>
        <a className="text-green-500 font-semibold inline-flex flex-1 text-xl hover:text-orange-900 transition-colors">
          Read more &rarr;
        </a>
      </Link>
      <div className="inline-flex items-center">
        <svg
          className="mr-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6ZM20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM19 11H9V9H19V11ZM15 15H9V13H15V15ZM19 7H9V5H19V7Z"
            fill="#736B7E"
          />
        </svg>
        <span className="text-gray-500">{readingText}</span>
      </div>
      <div className="flex items-center ml-4">
        <button onClick={onClick}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 16.0125L7.9125 15.0225C4.05 11.52 1.5 9.21 1.5 6.375C1.5 4.065 3.315 2.25 5.625 2.25C6.93 2.25 8.1825 2.8575 9 3.8175C9.8175 2.8575 11.07 2.25 12.375 2.25C14.685 2.25 16.5 4.065 16.5 6.375C16.5 9.21 13.95 11.52 10.0875 15.03L9 16.0125Z"
              fill="#FC2EB1"
            />
          </svg>
        </button>
      </div>
    </>
  )
}

export default PostFooter
