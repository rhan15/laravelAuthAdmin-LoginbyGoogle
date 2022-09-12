<div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 p-3 mb-2 bg-white text-dark">
    <div>
        {{ $logo }}
    </div>

    <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
        {{ $slot }}
    </div>
</div>
