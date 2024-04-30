<template>
    <div class="card">
        <Toolbar class="mb-4">
            <template #start>
                <Button label="New" icon="pi pi-plus" severity="success" class="mr-2" @click="openNew" />
                <Button label="Delete" icon="pi pi-trash" severity="danger" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length" />
            </template>
            <template #end>
                <FileUpload mode="basic" accept="image/*" :maxFileSize="1000000" label="Import" chooseLabel="Import" class="mr-2 inline-block" />
                <Button label="Export" icon="pi pi-upload" severity="help" @click="exportCSV($event)"  />
            </template>
        </Toolbar>

        <DataTable ref="dt" :value="products" dataKey="id" lazy :totalRecords="totalRecords" :loading="loading" @page="onPage($event)"
                :paginator="true" :rows="10"
                paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[3,5,10]"
                currentPageReportTemplate="Mostrando {first} al {last} de {totalRecords} productos">
                <template #header>
                    <div class="flex flex-wrap gap-2 align-items-center justify-content-between">
                        <h4 class="m-0">Gestión Productos</h4>
						<IconField iconPosition="left">
                            <InputIcon>
                                <i class="pi pi-search" />
                            </InputIcon>
                            <InputText v-model="buscar" placeholder="Buscar..." @keyup.enter="listarProductos" />
                        </IconField>
					</div>
                </template>

                <Column field="id" header="ID" sortable style="min-width:1rem"></Column>
                <Column field="nombre" header="Nombre" sortable style="min-width:16rem"></Column>
                <Column header="Image">
                    <template #body="slotProps">
                        <Image :src="`http://127.0.0.1:8000/${slotProps.data.imagen}`" :alt="slotProps.data.image" class="border-round" width="64" preview />
                    </template>
                </Column>
                <Column field="precio" header="Precio" sortable style="min-width:8rem">
                    <template #body="slotProps">
                        {{formatCurrency(slotProps.data.precio)}}
                    </template>
                </Column>
                <Column field="categoria.nombre" header="Categoria" sortable style="min-width:8rem"></Column>
                <Column field="inventoryStatus" header="Status" sortable style="min-width:4rem">
                    <template #body="slotProps">
                        {{ slotProps.data.estado }}
                    </template>
                </Column>
                <Column :exportable="false" style="min-width:8rem">
                    <template #body="slotProps">
                        <Button icon="pi pi-image" class="mr-2" @click="editImagen(slotProps.data)" />
                        <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
                        <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
                    </template>
                </Column>
            </DataTable>

        
    </div>

    <Dialog v-model:visible="dialogImagen" modal header="Edit Profile" :style="{ width: '30rem' }">
        <span class="p-text-secondary block mb-5">Actualiza la imagen.</span>
        <div class="flex align-items-center gap-3 mb-3">

            
            <FileUpload name="demo[]" customUpload @uploader="uploadImagen" :multiple="true" accept="image/*" :maxFileSize="1000000">
                <template #empty>
                    <p>Drag and drop files to here to upload.</p>
                </template>
            </FileUpload>

        </div>
    </Dialog>
</template>

<script setup>
import { onMounted, ref } from "vue";
import productoService from "../../services/producto.service"

const products = ref([]);
const loading = ref(false);
const totalRecords = ref(0);
const buscar = ref('')
const lazyParams = ref({page: 0})

const producto = ref({});
const dialogImagen = ref(false);

const dt = ref();

onMounted(() => {
    listarProductos()
})

const listarProductos = async () => {

    let page = lazyParams.value.page+1;
    let limit = lazyParams.value.rows;

    loading.value = true
    const {data} = await productoService.funListar(page, limit, buscar.value);
    console.log(data)
    products.value = data.data
    totalRecords.value = data.total

    loading.value = false
}

const onPage = (event) => {
    lazyParams.value = event;
    listarProductos()
}

const formatCurrency = (value) => {
    if(value)
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    return;
};

const exportCSV = () => {
    dt.value.exportCSV();
};

const editImagen = (prod) => {
    producto.value = prod;
    dialogImagen.value = true;
}

const seleccionarFiles = (event) => {
    console.log(event.target.files)
}

const uploadImagen = async (event) => {
    const file = event.files[0];
    console.log(file)

    // enviar archivo al servidor
    let formData = new FormData();
    formData.append("imagen", file);

    await productoService.actualizarImagenProducto(producto.value.id, formData);

    dialogImagen.value = false;
    listarProductos();

};
</script>