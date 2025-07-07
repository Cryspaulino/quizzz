const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

if (canvas && ctx) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let drawing = false;

    const getPosition = (e: MouseEvent) => {
        return {
            x: e.clientX,
            y: e.clientY
        };
    };

    canvas.addEventListener("mousedown", (e) => {
        drawing = true;
        const pos = getPosition(e);
        ctx.beginPath();
        ctx.moveTo(pos.x, pos.y);
    });

    canvas.addEventListener("mousemove", (e) => {
        if (!drawing) return;
        const pos = getPosition(e);
        ctx.lineTo(pos.x, pos.y);
        ctx.strokeStyle = isErasing ? "white" : "black";
        ctx.lineWidth = isErasing ? 100 : 2;
        ctx.lineCap = "round";
        ctx.stroke();
    });

    canvas.addEventListener("mouseup", () => {
        drawing = false;
    });

    canvas.addEventListener("mouseout", () => {
        drawing = false;
    });

    let isErasing = false;


    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "e") {
            isErasing = !isErasing;
            console.log(isErasing ? "🧽 Erase mode" : "✏️ Draw mode");
        }

        const clearBtn = document.getElementById("clear") as HTMLButtonElement;

        clearBtn.addEventListener("click", () => {
            ctx?.clearRect(0, 0, canvas.width, canvas.height);
            canvas.style.backgroundColor = "white";
        });

    });
}