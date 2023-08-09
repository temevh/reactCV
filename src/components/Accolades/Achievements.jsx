import { achievements } from "../data/Data";

const Achievements = () => {
  return (
    <div className="grid gap-3">
      <p className="font-bold font-size text-xl">Achievements</p>
      <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {achievements.map((achievement) => (
          <li class="pb-3 sm:pb-4">
            <div class="flex items-center space-x-4 pb-2">
              <div class="flex-1 min-w-0">
                <p class="text-lg font-bold font-titleFont text-designColor">
                  {achievement.name}
                </p>
                <p class="text-md ">{achievement.description}</p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-white ">
                {achievement.year}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
