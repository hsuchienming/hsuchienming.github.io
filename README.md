# 許建民｜教學研究

許建民教授的個人學術網站，以 [Astro](https://astro.build/) 產生靜態 HTML，發布於 GitHub Pages。

## 本機開發

```bash
npm install
npm run dev
```

網站預設開啟於 `http://localhost:4321`。

## 檢查與建置

```bash
npm run check
npm run build
npm run preview
```

產出位於 `dist/`。正式頁面採 `*.html` 格式，以保留舊站網址。

## 更新內容

- 最新消息：`src/data/news.json`
- 學術發表：`src/data/publications.json`
- 個人履歷：`src/data/profile.json`
- 行政服務：`src/data/service.json`
- 授課科目：`src/data/courses.json`
- 指導學生：`src/data/students.json`
- 相關連結：`src/data/links.json`
- 共用導覽與研究領域：`src/data/site.ts`

圖片與 PDF 等公開檔案放在 `public/`，引用網址維持 `/img/...` 或 `/source/...`。

## 發布

合併到 `master` 後，`.github/workflows/deploy.yml` 會建置並發布 GitHub Pages。Repository 的 Pages Source 需要設定為 **GitHub Actions**。
