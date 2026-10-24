import Card from "./Card";

export default function CardsConnector({ connector }: { connector: number }) {
  return (
    <div className="flex flex-col items-center justify-center md:items-start w-full">
      <div className="flex flex-col items-center justify-center w-fit">
        {connector !== 0 && (
          <div className="md:hidden flex flex-col justify-center items-center w-fit">
            <div className="w-3 h-10 bg-primary-500 flex items-center justify-center">
              <div className="h-10 border-l-2 border-secondary-800"></div>
            </div>
          </div>
        )}

        <div className="w-fit">
          <Card padding="p-2 lg:p-4">
            <h2 className="font-header font-extrabold text-3xl lg:text-4xl text-secondary-800">
              {`0${connector + 1}`}
            </h2>
          </Card>
        </div>

        <div className="flex flex-col justify-center items-center w-fit -mt-2 z-1">
          <div className="w-5 h-5 bg-white border-2 border-secondary-800 rounded-[10px]"></div>
          <div className="w-3 h-10 bg-primary-500 flex items-center justify-center">
            <div className="h-10 border-l-2 border-secondary-800"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
