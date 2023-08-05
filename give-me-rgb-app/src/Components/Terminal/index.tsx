interface ITerminal {
    children: React.ReactNode
}

export const Terminal = ({children}:ITerminal) => {
    return (
        <div className="dark:bg-zinc-800 bg-zinc-200 p-6">
          <div className="flex justify-center items-center m-8">
            <div className="h-92 w-full 2xl:w-1/3 bg-zinc-200 shadow-md dark:bg-zinc-900 rounded-md">
              <div className="bg-zinc-400 dark:bg-zinc-950 rounded-sm p-2">
                <div className="flex justify-start items-start gap-2">
                  <div className="h-4 w-4 rounded-full bg-red-600"></div>
                  <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
                  <div className="h-4 w-4 rounded-full bg-emerald-600"></div>
                </div>
              </div>
              <div className="p-4 flex-wrap">
                {children}
              </div>
            </div>
          </div>
      </div>
    );
}