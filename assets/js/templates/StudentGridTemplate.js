export function StudentGridTemplate(data, id) {
    return `
          <a href="./student.html?id=${id}" class="w-30 md:w-45">
            <div class="flex flex-col">
            <div class="mx-auto my-auto aspect-square h-30 w-30 md:w-40 md:h-40">
              <img
                class="h-full max-h-full w-full max-w-full rounded-full object-cover object-center"
                src="./assets/images/${id}/profile.png"
                alt=""
            />
        </div>
              <h3 class="text-center">${data.name}</h3>
              <h4 class="text-center">${data.speciality}</h4>
            </div>
          </a>
    `;
}
