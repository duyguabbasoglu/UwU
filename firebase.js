
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCUAhMRAeF_QFW9NuR9uh7zpfSB8bcj6zI",
  authDomain: "dyliax.firebaseapp.com",
  projectId: "dyliax",
  storageBucket: "dyliax.firebasestorage.app",
  messagingSenderId: "792145894381",
  appId: "1:792145894381:web:baa34803b66f6b200ae5e4",
  measurementId: "G-K51FJR2Y8H"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const sendBtn = document.getElementById("sendBtn");
const nameInput = document.getElementById("name");
const messageInput = document.getElementById("message");
const entriesDiv = document.getElementById("entries");

sendBtn.addEventListener("click", async () => {
  const name = nameInput.value.trim() || "Anonymous";
  const msg = messageInput.value.trim();
  if (!msg) return;

  await addDoc(collection(db, "hearEntries"), {
    name,
    msg,
    createdAt: serverTimestamp()
  });

  messageInput.value = "";
  loadEntries();
});

async function loadEntries() {
  const q = query(collection(db, "hearEntries"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  entriesDiv.innerHTML = "";
  snapshot.forEach(doc => {
    const data = doc.data();
    const div = document.createElement("div");
    div.className = "entry";
    div.innerHTML = `
      <p>${data.msg}</p>
      <p>â€” ${data.name}</p>
    `;
    entriesDiv.appendChild(div);
  });
}

loadEntries();