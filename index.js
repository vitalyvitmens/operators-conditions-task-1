document.getElementById('bmiForm').addEventListener('submit', function (event) {
  event.preventDefault()

  const weight = parseFloat(document.getElementById('weight').value)
  const height = parseFloat(document.getElementById('height').value)

  if (weight > 0 && height > 0) {
    const bmi = weight / (height * height)
    const classification = getClassification(bmi)
    document.getElementById(
      'result'
    ).innerHTML = `Вес: ${weight} кг<br>Рост: ${height} м<br>ИМТ: ${bmi.toFixed(
      2
    )}<br>Классификация: ${classification}`
  } else {
    document.getElementById('result').textContent =
      'Пожалуйста, введите корректные значения для веса и роста.'
  }
})

function getClassification(bmi) {
  if (bmi < 18.5) return 'Дефицит массы тела'
  if (bmi >= 18.5 && bmi < 25) return 'Нормальная масса тела'
  if (bmi >= 25 && bmi < 30) return 'Избыточная масса тела (предожирение)'
  if (bmi >= 30 && bmi < 35) return 'Ожирение I степени'
  if (bmi >= 35 && bmi < 40) return 'Ожирение II степени'
  return 'Ожирение III степени'
}
