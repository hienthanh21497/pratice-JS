/*
Bài 6: Hàm phân loại và đếm số lượng theo ngưỡng (function + for + if / else if / else)
Viết hàm analyzeScores(scores) nhận vào một mảng điểm số, ví dụ [45, 78, 92, 60, 88, 100, 50]:
Dùng vòng lặp for duyệt từng điểm để đếm số lượng theo 3 mức:
pass (đạt): score >= 70
warning (cần cố gắng): score >= 50 và < 70
fail (chưa đạt): < 50
Tìm và trả về thêm điểm cao nhất (maxScore) trong mảng.
return object { pass, warning, fail, maxScore } và in kết quả đẹp ra màn hình khi gọi hàm.
*/
let diemSo = [45, 78, 92, 60, 88, 100, 50]
function analyzeScores(scores) {

    let maxScore = scores[0];

    let pass = 0;
    let warning = 0;
    let fail = 0
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 70) {
            pass++
        }
        else if (scores[i] >= 50 && scores[i] < 70) {
            warning++
        }
        else {
            fail++
        };
        if (scores[i] > maxScore) {
            maxScore = scores[i]
        };
    }
    return {
        pass: pass,
        warning: warning,
        fail: fail,
        maxScore: maxScore
    }
}

const summary = analyzeScores(diemSo);
console.log(summary);
// In kết quả đẹp ra màn hình khi gọi hàm
console.log(`Pass: ${summary.pass} | Warning: ${summary.warning} | Fail: ${summary.fail} | Max Score: ${summary.maxScore}`);
