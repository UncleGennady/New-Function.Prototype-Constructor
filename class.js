'use strict'

void function(){
        class Student{
        firstName = null;
        lastName = null;
        yearOfBirth = null;
        attendance = new Array(10);
        marks = new Array(10);

        constructor(firstName, lastName, yearOfBirth){
            this.firstName = firstName;
            this.lastName = lastName;
            this.yearOfBirth = yearOfBirth;
        }
        //проверяем массив на оставшиеся уроки(оценки), и находим следующий по списку урок(оценку)  
        indexCheck(value){ 
            //если уроков больше нет
            if(value[value.length-1]!==undefined) return console.warn('уроков больше нет')

            return value.findIndex(el => el === undefined)
        };

            getAge(){
            return new Date().getFullYear() - this.yearOfBirth
        };
        present(){
            //наш индекс урока 
            const actualIndex = this.indexCheck(this.attendance)
            if(typeof(actualIndex) === 'number')this.attendance[actualIndex] = true;
        };
        absent(){
            //наш индекс урока 
            const actualIndex = this.indexCheck(this.attendance)
            if(typeof(actualIndex) === 'number')this.attendance[actualIndex] = false;
        };
        mark(value){
            if(value < 0 || value > 10) {
                console.warn('mark must be between 0 and 10')
                return
            }
            //наш индекс оценки
            const actualIndex = this.indexCheck(this.marks)
            if(typeof(actualIndex) === 'number')this.marks[actualIndex] = value;
        };

        //среднее количество
        calc(range,type){
            const result = range.reduce((acc, item)=> {
                if(typeof(item === type)){
                    acc.sum += (+item);
                    acc.count++;
                }
                return acc
            },{sum:0, count:0});

            return result.sum / result.count
        };

        //наш средний балл
        gpa(){
            return this.calc(this.marks, 'number')
        };
        //наша средняя посещаемость 
        attendanceRate(){
            return this.calc(this.attendance, 'boolean')
        };

        summary(){
            if(this.gpa()>= 9 && this.attendanceRate()>=0.9) return 'Ути какой молодчинка!';
            if(this.gpa()<9 && this.attendanceRate()< 0.9) return 'Редиска!';
            if(this.gpa()<9 || this.attendanceRate()< 0.9) return 'Норм, но можно лучше';
        };
    }

    const student1 =  new Student('sasha', 'asasa', 1939)
    const student2 =  new Student('liza', 'ssdad', 1933)

    console.log(student1)
    console.log(student2)

    student1.mark(10)
    student1.mark(9)
    student1.mark(2)
    student1.present()
    student1.absent()
    student1.absent()
    console.log(student1.summary())

    student2.mark(10)
    student2.mark(10)
    student2.mark(10)
    student2.present()
    student2.present()
    student2.present()

    console.log(student2.summary())
}()
