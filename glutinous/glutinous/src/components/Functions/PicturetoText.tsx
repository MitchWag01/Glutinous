
import { createScheduler, createWorker } from "tesseract.js";




 export const processImage = async (fileURL: string) => {

    const scheduler = createScheduler();
    const worker = await createWorker();
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
    scheduler.addWorker(worker);

    console.log("Scanning Image");

    const { data: { text } } = await worker.recognize(fileURL);
    return (text);}



