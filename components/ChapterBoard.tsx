"use client";

import { Card } from "pixel-retroui";
import ChapterTask from "@/components/ChapterTask";
import { Chapter } from "@/app/types";
import { nanoid } from "nanoid";
import { memo, useState } from "react";

const CompletionPercentage = memo(function CompletionPercentage({
  data,
}: {
  data: Chapter;
}) {
  const completedTasksLength = data.tasks.filter((x) => x.completed).length;
  const totalTasksLength = data.tasks.length;
  const percentage = Math.floor(
    (completedTasksLength / totalTasksLength) * 100,
  );
  return (
    <strong className="text-2xl font-extrabold tracking-widest text-black bg-[#fcd34d] px-3 saturate-150 filter">
      {percentage}%
    </strong>
  );
});

export default function ChapterBoard({
  data,
  refreshData,
}: {
  data: Chapter;
  refreshData: () => void;
}) {
  const [completedPercentage, setCompletedPercentage] = useState<number>(0);
  {
  }
  return (
    <section className="flex-col gap-5 w-[90%] flex">
      <div className="w-full">
        <strong className="text-xl px-3 tracking-wide text-black bg-[#fcd34d]">
          {data.title ?? "Your Tasks"}
        </strong>
        <br />
        <CompletionPercentage data={data} />
        <Card className="py-10 px-1 md:px-5 w-full">
          <div className="flex-col flex gap-6 divide-y-4 divide-black">
            {/* uncompleted tasks  */}
            <div>
              <div className="opacity-90 flex justify-between px-2 md:px-10 font-bold">
                <h4>Status</h4>
                <h4>Todo</h4>
              </div>
              <div className="flex flex-col gap-4">
                {data.tasks
                  .filter((x) => !x.completed)
                  .sort((x, y) => x.content.localeCompare(y.content))
                  .map((task) => (
                    <ChapterTask
                      key={`${task.content}@@@${nanoid(3)}`}
                      data={task}
                      chapterId={data.id}
                      refreshData={refreshData}
                    />
                  ))}
              </div>
            </div>
            {/* completed tasks  */}
            <div className="pt-5">
              <div className="flex flex-col gap-4">
                {data.tasks
                  .filter((x) => x.completed)
                  .sort((x, y) => x.content.localeCompare(y.content))
                  .map((task) => (
                    <ChapterTask
                      key={`${task.content}@@@${nanoid(3)}`}
                      data={task}
                      chapterId={data.id}
                      refreshData={refreshData}
                    />
                  ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
