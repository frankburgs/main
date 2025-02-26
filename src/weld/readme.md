``` html
<button class="open-modal-btn">Open Modal</button>
<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 hidden" id="modal">
    <div class="bg-white p-6 rounded shadow-lg w-1/3">
    <h2 class="text-2xl font-bold mb-4">Modal Title</h2>
    <p class="mb-4">This is the content of the modal.</p>
    <button class="close-modal-btn bg-blue-500 text-white px-4 py-2 rounded">Close</button>
    </div>
</div>

<script>
document.querySelector('.open-modal-btn').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('hidden');
});

document.querySelector('.close-modal-btn').addEventListener('click', () => {
  document.getElementById('modal').classList.add('hidden');
});

// Close the modal when clicking outside of it
document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('modal')) {
    document.getElementById('modal').classList.add('hidden');
  }
});
</script>
```