import { FileText, Trash2 } from "lucide-react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

function FileList({ files, setFiles }) {


  const handleDragEnd = (result) => {
  if (!result.destination) return;

  const items = Array.from(files);

  const [reorderedItem] = items.splice(
    result.source.index,
    1
  );

  items.splice(
    result.destination.index,
    0,
    reorderedItem
  );

  setFiles(items);
};

  return (
    <div className="bg-white rounded-3xl p-5 mt-5 shadow-sm ">

      <div className="flex items-center justify-between mb-3">

        <h3 className="text-lg lg:text-xl font-bold">
          Selected Files ({files.length})
        </h3>

        {files.length > 0 && (
          <button
            onClick={() => setFiles([])}
            className="text-red-500 text-sm hover:text-red-700"
          >
            Clear All
          </button>
        )}

      </div>

      <div className="space-y-3">

        {files.length === 0 ? (

          <div className="rounded-2xl border border-dashed border-gray-200 py-8 text-center">

            <FileText
              size={30}
              className="mx-auto text-gray-300"
            />

            <p className="mt-3 font-medium text-gray-600">
              No files selected yet
            </p>

            <p className="mt-1 text-sm text-gray-400">
              Add PDF files to start merging
            </p>

          </div>
        ) : (
 
          <DragDropContext onDragEnd={handleDragEnd}>
  <Droppable droppableId="pdf-files">
    {(provided) => (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        className="space-y-3"
      >
        {files.map((file, index) => (
          <Draggable
            key={file.name + index}
            draggableId={file.name + index}
            index={index}
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 transition hover:border-violet-300 hover:bg-violet-50 bg-white"
              >
                <div className="flex items-center gap-3">

                  {/* Drag Handle */}
                  <div
                    {...provided.dragHandleProps}
                    className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-violet-600"
                  >
                    ☰
                  </div>

                  {/* PDF Icon */}
                  <div className="bg-violet-100 p-2 rounded-lg">
                    <FileText
                      size={20}
                      className="text-violet-600"
                    />
                  </div>

                  {/* File Details */}
                  <div>
                    <p className="font-medium break-all">
                      {file.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>

                </div>

                {/* Delete */}
                <button
                  onClick={() =>
                    setFiles(
                      files.filter((_, i) => i !== index)
                    )
                  }
                  className="rounded-lg p-2 text-red-500 hover:bg-red-50 hover:text-red-700"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            )}
          </Draggable>
        ))}

        {provided.placeholder}
      </div>
    )}
  </Droppable>
</DragDropContext>

        )}

      </div>

    </div>
  );
}



export default FileList;