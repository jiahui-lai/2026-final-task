/** * 導覽列漢堡選單互動功能 */
document.addEventListener('DOMContentLoaded', function() {
  // 取得漢堡按鈕與導覽選單群組的 DOM 元素
  const menuToggle = document.getElementById('menuToggle');
  const headerNav = document.getElementById('headerNav');

  // 安全檢查：確保畫面上存在這些元素才執行，避免其他頁面報錯
  if (menuToggle && headerNav) {
    
    // 監聽漢堡按鈕的點擊事件
    menuToggle.addEventListener('click', function(event) {
      // 阻止事件冒泡，防止觸發點擊外部關閉的機制
      event.stopPropagation();
      
      // 切換按鈕樣式（三條線 <-> X）
      menuToggle.classList.toggle('active');
      // 切換選單顯示狀態（隱藏 <-> 展開）
      headerNav.classList.toggle('active');
    });

    // 點擊選單連結時，自動關閉選單（適用於單頁式錨點或增進體驗）
    const navLinks = document.querySelectorAll('.header-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        headerNav.classList.remove('active');
      });
    });

    // 進階體驗：點擊選單以外的空白區域時，自動收合選單
    document.addEventListener('click', function(event) {
      // 如果選單目前是開啟狀態，且點擊的地方不是選單內部
      if (headerNav.classList.contains('active') && !headerNav.contains(event.target)) {
        menuToggle.classList.remove('active');
        headerNav.classList.remove('active');
      }
    });
  }
});