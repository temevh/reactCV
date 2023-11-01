import { certificates } from "../data/Data";

const Certificates = () => {
  return (
    <div className="grid gap-3">
      <p className="text-start text-slate-300/50 text-2xl">
        Certificates & courses
      </p>
      <ul class="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
        {certificates.map((certificate) => (
          <li class="pb-3 pt-3 sm:pb-4">
            <div class="flex items-center space-x-4 pb-2">
              <div class="flex-1 min-w-0">
                <p class="text-lg font-bold font-titleFont text-designColor">
                  {certificate.name}
                </p>
                <p class="text-md ">{certificate.description}</p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-white ">
                {certificate.year}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certificates;
