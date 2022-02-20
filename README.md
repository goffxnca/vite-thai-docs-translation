> ### แจ้งให้ทราบ
>
> - Repository นี้ใช้สำหรับการแปลคู่มือการใช้งาน Vite เวอร์ชั่นภาษาไทยเท่านั้น
> - Discussion ใดๆที่เกี่ยวข้องกับการใช้งาน Vite ในด้านเทคนิคและไม่เกี่ยวกับการแปลภาษา ขอแนะนำให้เปิด [Discussion](https://github.com/vitejs/vite/discussions) หรือ [Issue](https://github.com/vitejs/vite/issues) โดยตรงใน [repository หลักของ Vite](https://github.com/vitejs/vite) เวอร์ชั่นภาษาอังกฤษ

<p align="center">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
</p>
<br/>
<p align="center">
  <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatility"></a>
  <a href="https://app.circleci.com/pipelines/github/vitejs/vite?branch=main"><img src="https://circleci.com/gh/vitejs/vite/tree/main.svg?style=shield" alt="unix build status"></a>
  <a href="https://ci.appveyor.com/project/yyx990803/vite/branch/main"><img src="https://ci.appveyor.com/api/projects/status/0q4j8062olbcs71l/branch/main?svg=true" alt="windows build status"></a>
  <a href="https://chat.vitejs.dev"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
<br/>

# Vite (เวอร์ชั่นภาษาไทย)

> Vite：เครื่องมือยุคใหม่สำหรับนักพัฒนา Frontend

- 💡 รัน dev server ขึ้นแบบเร็วโคตรๆ
- ⚡️ ไซส์เล็ก และ Hot Module Reload (HMR) ที่โครตเร็ว (เปลี่ยนโค้ดปุ๊ป แสดงผลปั๊ป)
- 🛠️ มีลูกเล่นเยอะ ปรับแต่งได้ตามความต้องการของแต่ละโปรเจค
- 📦 Build ขึ้น production แบบรีด Performance สูงสุด
- 🔩 สามารถติดตั้ง Plugin อื่นๆ เข้ามาใช้งานเพิ่มเติมได้
- 🔑 API ต่างๆรองรับ Typescript

Vite （เป็นคำภาษาฝรั่งเศส แปลว่า "เร็ว" ออกเสียงว่า "วีท" เป็นเครื่องมือ Build ตัวใหม่ล่าสุดของฝั่ง frontend (คล้ายๆ Webpack) ถูกสร้างมาเพื่อทำให้การทำงานฝั่ง Frontend เป็นเรื่องสนุกยิ่งขึ้น โดย Vite ประกอบไปด้วย 2 ส่วนสำคัญหลักๆ:

- Dev server ที่ทำหน้าที่ run ไฟล์ซอสโค้ดต่างๆ โดยการใช้ประโยชน์จาก [Native ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules), มาพร้อมกับ [Feature สนับสนุนอื่นๆ](https://vitejs.dev/guide/features.html) รวมถึงการมี [Hot Module Replacement (HMR)](https://vitejs.dev/guide/features.html#hot-module-replacement) ที่ตอบสนองบน Browser อย่างรวดเร็ว เมื่อมีการเปลี่ยนแปลงซอสโค้ด

- [Build Command](https://vitejs.dev/guide/build.html) ที่ทำหน้าที่ build รวบรวมซอสโค้ดและไฟล์ asset ต่างๆ โดยใช้ [Rollup](https://rollupjs.org)  เพื่อให้ไฟล์มีขนาดเล็กและมีประสิทธิภาพสูงสุดเมื่อนำไป deploy ขึ้น production


## 📝 ต้องการช่วยแปล?
ถ้าคุณต้องการเป็นส่วนหนึ่งของการแปล สามารถดูรายละเอียดวิธีการเข้าร่วมได้ตามลิงค์นี้ [Wiki](https://github.com/vitejs/vite-docs-th/wiki)

## 📥 วิธีการ Run ที่เครื่องของคุณ

```bash
# Clone repository นี้ลงไปที่เครื่องของคุณก่อน
$ git clone https://github.com/vitejs/docs-cn.git

# ทำการติดตั้ง Dependency ต่างๆ โดยใช้ npm
$ npm install
# หรือถ้าใช้ yarn ก็ run คำสั่งนี้แทน
$ yarn install

# หลังจากติดตั้งสำเร็จให้ run project ขึ้นมา และไปที่ http://localhost:3000/ และสามารถเริ่มการแปลได้เลย
$ yarn dev
```
