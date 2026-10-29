export function StudentGridTemplate(data, id) {
    return `
          <a href="./student.html?id=${id}" class="w-1/2 p-2 sm:w-45">
            <div class="flex flex-col">
              <div class="mx-auto aspect-square w-full h-full">
                <img
                  class="h-full max-h-full w-full max-w-full rounded-full object-cover object-center"
                  src="./assets/images/${id}/profile.png"
                  alt=""
                />
              </div>
              <div>
                <h3 class="text-center">${data.name}</h3>
                <h4 class="text-center">${data.speciality}</h4>
              </div>
            </div>
          </a>
    `;
}
