// export default function Footer() {
//   return (
//     <footer className="py-12 text-center bg-gradient-to-br from-purple-50 via-yellow-50 to-white">
//       <p className="text-gray-700 text-lg flex items-center justify-center gap-2">
//         <span className="text-xl">✉️</span>
//         <span>For contact & any query:</span>
//         <a
//           href="mailto:tasmimajerin@email.com"
//           className="font-semibold text-primary hover:underline"
//         >
//           tasmimajerin@email.com
//         </a>
//       </p>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="py-12 text-center bg-gradient-to-br from-purple-50 via-yellow-50 to-white">
      <p className="text-gray-700 text-lg">
        যোগাযোগ বা যেকোনো প্রশ্নের জন্য:
        <a
          href="mailto:tasmimajerin@email.com"
          className="font-semibold text-primary hover:underline ml-2"
        >
          tasmimajerin@email.com
        </a>
      </p>
    </footer>
  );
}
