const today = new Date(); 
const dateString = `${today.getDate().toString().padStart(2, '0')}             ${(today.getMonth() + 1).toString().padStart(2, '0')}                    ${today.getFullYear().toString().slice(-2)}`;

// Данные сотрудников по группам
const employees = {
    professors: [
        { name: 'Барбаков Олег Михайлович', rate: 1.5, vacationDays: 56, job: 'Профессор' },
        { name: 'Обухов Александр Геннадьевич', rate: 1.5, vacationDays: 56, job: 'Профессор' }
    ],
    specialists: [
        {name: 'Абросимова Светлана Александровна', rate: 1.5, vacationDays: 56, job: 'Специалист'},
        {name: 'Арясова Дина Валерьевна', rate: 1.5, vacationDays: 56, job: 'Специалист'},
        {name: 'Барбакова Елена Валерьевна', rate: 0.3, vacationDays: 56, job: 'Специалист'},
        {name: 'Бердова Юлия Сергеевна', rate: 1.5, vacationDays: 56, job: 'Специалист'},
        {name: 'Богунова Елена Викторовна', rate: 1.5, vacationDays: 56, job: 'Специалист'},
        {name: 'Величко Андрей Николаевич', rate: 0.5, vacationDays: 56, job: 'Специалист'},
        {name: 'Виноградова Марина Владимировна', rate: 0.5, vacationDays: 56, job: 'Специалист'},
        {name: 'Кондратьева Наталья Алексеевна', rate: 1.5, vacationDays: 56, job: 'Специалист'},
        {name: 'Курманова Фариза Тельманова', rate: 0.15, vacationDays: 56, job: 'Специалист'},
        {name: 'Линг Виктория Викторовна', rate: 1.5, vacationDays: 56, job: 'Специалист'},
        {name: 'Локотаева Ирина Геннадьевна', rate: 0.5, vacationDays: 56, job: 'Специалист'},
        {name: 'Михайлова Ольга Викторовна', rate: 1, vacationDays: 56, job: 'Специалист'},
        {name: 'Назарова Нелли Владимировна', rate: 0, vacationDays: 56, job: 'Специалист'},
        {name: 'Панченко Наталья Борисовна', rate: 1.5, vacationDays: 56, job: 'Специалист'},
        {name: 'Сорокина Наталья Викторовна', rate: 1.5, vacationDays: 56, job: 'Специалист'},
        {name: 'Айдарова Земфира Хамзовна', rate: 1.5, vacationDays: 56, job: 'Специалист'},
        {name: 'Гуденкова Олеся Ивановна', rate: 0.25, vacationDays: 56, job: 'Специалист'},
        {name: 'Носов Иван Анатольевич', rate: 0.25, vacationDays: 56, job: 'Специалист'},
        {name: 'Сердюкова Екатерина Владимировна', rate: 0.25, vacationDays: 56, job: 'Специалист'},
        {name: 'Шестаков Никита Владимирович', rate: 0.25, vacationDays: 56, job: 'Специалист'}
    ],
    docents: [
        { name: 'Андриянов Алексей Михайлович', rate: 1.25, vacationDays: 70, job: 'Доцент'},
        { name: 'Аханова Марина Анатольевна', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Ахмадулин Руслан Камильевич', rate: 0.25, vacationDays: 70, job: 'Доцент' },
        { name: 'Барбаков Григорий Олегович', rate: 0.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Басинский Константин Юрьевич', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Баюк Ольга Васильевна', rate: 0.3, vacationDays: 70, job: 'Доцент' },
        { name: 'Беляков Дмитрий Константинович', rate: 0.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Бердюгина Оксана Николаевна', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Вершинина Светлана Валерьевна', rate: 0.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Говорков Денис Александрович', rate: 0, vacationDays: 70, job: 'Доцент' },
        { name: 'Горева Ольга Михайловна', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Гусва Валентина Евгеньевна', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Дубатовка Татьяна Викторовна', rate: 0, vacationDays: 70, job: 'Доцент' },
        { name: 'Зобнин Юрий Александрович', rate: 1, vacationDays: 70, job: 'Доцент' },
        { name: 'Золотов Анатолий Леонидович', rate: 0.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Карнаухов Олег Владимирович', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Карнаухова Инна Владимировна', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Курышев Николай Иванович', rate: 0.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Мечик Софья Валерьевна', rate: 0.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Овчинникова Светлана Валерьевна', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Осинцева Марина Александровна', rate: 1, vacationDays: 70, job: 'Доцент' },
        { name: 'Павлова Лариса Леонидовна', rate: 0.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Панфилов Александр Анатольевич', rate: 0.35, vacationDays: 70, job: 'Доцент' },
        { name: 'Пашкевич Анастасия Сергеевна', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Попова Виктория Романовна ', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Пряхина Елена Николаевна', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Пяльченков Дмитрий Владимирович', rate: 0.25, vacationDays: 70, job: 'Доцент' },
        { name: 'Рындина Ольга Владимировна', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Сапоженков Николай Олегович', rate: 0.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Сенкевич Людмила Борисовна', rate: 0.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Ситников Валерий Николаевич', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Сорокин Геннадий Геннадьевич ', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Спирин Игорь Сергеевич ', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Тарханова Ольга Васильевна ', rate: 1, vacationDays: 70, job: 'Доцент' },
        { name: 'Терехова Наталья Владимировна ', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Толчина Светлана Ивановна', rate: 0, vacationDays: 70, job: 'Доцент' },
        { name: 'Уваров Владислав Вадимович', rate: 0.4, vacationDays: 70, job: 'Доцент' },
        { name: 'Фокина Елена Николаевна', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Фомина Валентина Викторовна', rate: 1.5, vacationDays: 70, job: 'Доцент' },
        { name: 'Чунихин Сергей Александровна', rate: 1.5, vacationDays: 70, job: 'Доцент' },
    ]
};

// Функция обновления списка сотрудников при выборе группы
function updateEmployeeList() {
    const groupSelect = document.getElementById('groupSelect');
    const employeeSelect = document.getElementById('employeeName');

    const selectedGroup = groupSelect.value;
    employeeSelect.disabled = false;

    // Очистка предыдущего списка
    while (employeeSelect.firstChild) {
        employeeSelect.removeChild(employeeSelect.firstChild);
    }

    // Создание нового списка сотрудников для выбранной группы
    if (selectedGroup === '') {
        employeeSelect.appendChild(createOption('', 'Выберите сотрудника...'));
    } else {
        employeeSelect.appendChild(createOption('', 'Выберите сотрудника...'));
        employees[selectedGroup].forEach((employee) => {
            employeeSelect.appendChild(createOption(employee.name, `${employee.name} (Ставка: ${employee.rate}, Отпускные дни: ${employee.vacationDays}, Должность: ${employee.job})`));
        });
    }
}

// Вспомогательная функция для создания опции в селекте
function createOption(value, text) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    return option;
}

// Основная логика обработки формы
document.getElementById('contractForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const numberValue = document.getElementById('numberInput').value;
    const employeeName = document.getElementById('employeeName').value;
    const imageFile = document.getElementById('imageFile').files[0];

    if (!startDate || !endDate || !numberValue || !employeeName || !imageFile) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    // Найти данные выбранного сотрудника
let selectedEmployee = null;
Object.keys(employees).forEach(groupKey => {
    const group = employees[groupKey];
    const foundEmployee = group.find(emp => emp.name === employeeName);
    if (foundEmployee) {
        selectedEmployee = foundEmployee;
    }
});

// Проверяем, найден ли сотрудник
if (!selectedEmployee) {
    alert(`Не удалось найти данные сотрудника с именем "${employeeName}". Попробуйте еще раз.`);
    return;
}

    // Создаем холст для отображения результата
    const resultCanvas = document.getElementById('resultCanvas');
    const ctx = resultCanvas.getContext('2d');

    // Загружаем выбранное изображение
    const img = new Image();
    img.onload = () => {
        resultCanvas.width = img.width;
        resultCanvas.height = img.height;

        // Рисуем изображение на холсте
        ctx.drawImage(img, 0, 0);

        // Настраиваем шрифт и выравнивание текста
        ctx.font = 'bold 14px Arial'; // Размер шрифта уменьшен для удобства чтения
        ctx.textAlign = 'left'; // Левое выравнивание для текста
        ctx.fillStyle = '#000'; // Цвет текста

        // Пишем даты
        ctx.fillText(dateString, 670, 95);


        let sliceStart = startDate.slice(2);
                    let partsStart = sliceStart.toString().split('-');
                    ctx.fillText(partsStart[2], 450, 635); // Координаты числа
                    ctx.fillText(partsStart[1], 530, 635); // Координаты месяца
                    ctx.fillText(partsStart[0], 620, 635); // Координаты года

        let sliceEnd = endDate.slice(2);
                    let partsEnd = sliceEnd.toString().split('-');
                    ctx.fillText(partsEnd[2], 708, 635); // Координаты числа
                    ctx.fillText(partsEnd[1], 797, 635); // Координаты месяца
                    ctx.fillText(partsEnd[0], 885, 635); // Координаты года

        // Пишем имя сотрудника по центру
        ctx.fillText(employeeName, resultCanvas.width - 600, resultCanvas.height - 1190);
        // Пишем имя сотрудника по снизу
        ctx.fillText(employeeName, 170, resultCanvas.height - 295);
// Пишем номер документа
ctx.textAlign = 'center'; // Устанавливаем выравнивание центр
ctx.fillText(numberValue, resultCanvas.width - 400, resultCanvas.height - 1409); // Выводим число с отступом 20 пикселей от правого края

// Вывод постоянных данных в правом верхнем углу
ctx.textAlign = 'right'; // Правое выравнивание
ctx.fillText('Клочков Юрий Сергеевич', resultCanvas.width - 110, resultCanvas.height - 200); // Ректор

// Вывод должности
ctx.textAlign = 'left'; // Левое выравнивание
ctx.fillText(`${selectedEmployee.job}`, 460, 365); // Количество отпускных дней

// Вывод ставки и количества отпускных дней внизу слева
ctx.textAlign = 'left'; // Левое выравнивание
ctx.fillText(`${selectedEmployee.rate}`, 573, 447); // Ставка
ctx.fillText(`${selectedEmployee.vacationDays}`, 940, resultCanvas.height - 675); // Количество отпускных дней

// Вывод постоянных данных в правом нижнем углу
ctx.textAlign = 'right'; // Правое выравнивание
ctx.fillText('Барбаков Олег Фёдорович', resultCanvas.width - 100, resultCanvas.height - 130); // Руководитель снизу
ctx.fillText('Барбаков Олег Фёдорович', resultCanvas.width - 445, resultCanvas.height - 1263); // Руководитель сверху

ctx.textAlign = 'right'; // Правое выравнивание
ctx.fillText('Кафедра математики и прикладных информационных технологий', resultCanvas.width - 280, resultCanvas.height - 1137); // Кафедра

ctx.textAlign = 'center'; // Правое выравнивание
ctx.fillText('Мельникайте, 70, к.519', resultCanvas.width / 2, 549); // Адрес
}; // Закрывающая скобка блока img.onload

// Чтение файла изображения через FileReader
const reader = new FileReader();
reader.onload = (event) => {
    img.src = event.target.result;
};
reader.readAsDataURL(imageFile);
});