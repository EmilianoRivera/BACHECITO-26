-- CreateTable
CREATE TABLE "Nombre_Administrador" (
    "nomad_id" SERIAL NOT NULL,
    "nomad_nombre" TEXT NOT NULL,
    "nomad_appat" TEXT NOT NULL,
    "nomad_apmat" TEXT NOT NULL,

    CONSTRAINT "Nombre_Administrador_pkey" PRIMARY KEY ("nomad_id")
);

-- CreateTable
CREATE TABLE "Administrdor" (
    "adm_id" SERIAL NOT NULL,
    "adm_contrasena" TEXT NOT NULL,
    "adm_fechanac" TIMESTAMP(3) NOT NULL,
    "adm_correo" TEXT NOT NULL,
    "adm_token" INTEGER NOT NULL,
    "nomad_id" INTEGER NOT NULL,

    CONSTRAINT "Administrdor_pkey" PRIMARY KEY ("adm_id")
);

-- CreateTable
CREATE TABLE "Nombre_Usuario" (
    "nomu_id" SERIAL NOT NULL,
    "nomu_nombre" TEXT NOT NULL,
    "nomu_appat" TEXT NOT NULL,
    "nomu_apmat" TEXT NOT NULL,

    CONSTRAINT "Nombre_Usuario_pkey" PRIMARY KEY ("nomu_id")
);

-- CreateTable
CREATE TABLE "Usuario" (
    "usu_id" SERIAL NOT NULL,
    "usu_contrasena" TEXT NOT NULL,
    "usu_fechanac" TIMESTAMP(3) NOT NULL,
    "usu_correo" TEXT NOT NULL,
    "usu_estado_cuenta" BOOLEAN NOT NULL DEFAULT true,
    "nomu_id" INTEGER NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("usu_id")
);

-- CreateTable
CREATE TABLE "Usuarios_Baneados_temporalmente" (
    "ubt_id" SERIAL NOT NULL,
    "ubt_motivo_de_baneo" TEXT NOT NULL,
    "ubt_fecha_de_baneo" TIMESTAMP(3) NOT NULL,
    "ubt_duracion_del_baneo" TIMESTAMP(3) NOT NULL,
    "ubt_cantidad_de_baneos" INTEGER NOT NULL,
    "usu_id" INTEGER NOT NULL,
    "adm_id" INTEGER NOT NULL,

    CONSTRAINT "Usuarios_Baneados_temporalmente_pkey" PRIMARY KEY ("ubt_id")
);

-- CreateTable
CREATE TABLE "Usuarios_Baneados_permanentemente" (
    "ubp_id" SERIAL NOT NULL,
    "ubp_motivo_de_baneo" TEXT NOT NULL,
    "ubp_fecha_de_baneo" TIMESTAMP(3) NOT NULL,
    "ubp_estado_baneo_permanente" BOOLEAN NOT NULL DEFAULT false,
    "usu_id" INTEGER NOT NULL,
    "adm_id" INTEGER NOT NULL,

    CONSTRAINT "Usuarios_Baneados_permanentemente_pkey" PRIMARY KEY ("ubp_id")
);

-- CreateTable
CREATE TABLE "Reportes" (
    "rep_id" SERIAL NOT NULL,
    "rep_ubicacion" TEXT NOT NULL,
    "rep_descripcion" TEXT NOT NULL,
    "rep_imagenURL" TEXT NOT NULL,
    "adm_id" INTEGER NOT NULL,
    "usu_id" INTEGER NOT NULL,

    CONSTRAINT "Reportes_pkey" PRIMARY KEY ("rep_id")
);

-- CreateTable
CREATE TABLE "Estado_reporte" (
    "edo_id" SERIAL NOT NULL,
    "edo_reporte" TEXT NOT NULL,
    "edo_pendiente" TEXT NOT NULL DEFAULT 'Sin atender',
    "edo_en_proceso" TEXT NOT NULL DEFAULT 'En atención',
    "edo_resuelto" TEXT NOT NULL DEFAULT 'Atendido',
    "rep_id" INTEGER NOT NULL,

    CONSTRAINT "Estado_reporte_pkey" PRIMARY KEY ("edo_id")
);

-- CreateTable
CREATE TABLE "Alcaldia" (
    "alc_id" INTEGER NOT NULL,
    "alc_nombre" TEXT NOT NULL,
    "rep_id" INTEGER NOT NULL,

    CONSTRAINT "Alcaldia_pkey" PRIMARY KEY ("alc_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Administrdor_nomad_id_key" ON "Administrdor"("nomad_id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nomu_id_key" ON "Usuario"("nomu_id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Baneados_temporalmente_usu_id_key" ON "Usuarios_Baneados_temporalmente"("usu_id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Baneados_temporalmente_adm_id_key" ON "Usuarios_Baneados_temporalmente"("adm_id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Baneados_permanentemente_usu_id_key" ON "Usuarios_Baneados_permanentemente"("usu_id");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_Baneados_permanentemente_adm_id_key" ON "Usuarios_Baneados_permanentemente"("adm_id");

-- CreateIndex
CREATE UNIQUE INDEX "Reportes_adm_id_key" ON "Reportes"("adm_id");

-- CreateIndex
CREATE UNIQUE INDEX "Reportes_usu_id_key" ON "Reportes"("usu_id");

-- CreateIndex
CREATE UNIQUE INDEX "Estado_reporte_edo_reporte_key" ON "Estado_reporte"("edo_reporte");

-- CreateIndex
CREATE UNIQUE INDEX "Estado_reporte_rep_id_key" ON "Estado_reporte"("rep_id");

-- CreateIndex
CREATE UNIQUE INDEX "Alcaldia_alc_nombre_key" ON "Alcaldia"("alc_nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Alcaldia_rep_id_key" ON "Alcaldia"("rep_id");

-- AddForeignKey
ALTER TABLE "Administrdor" ADD CONSTRAINT "Administrdor_nomad_id_fkey" FOREIGN KEY ("nomad_id") REFERENCES "Nombre_Administrador"("nomad_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_nomu_id_fkey" FOREIGN KEY ("nomu_id") REFERENCES "Nombre_Usuario"("nomu_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuarios_Baneados_temporalmente" ADD CONSTRAINT "Usuarios_Baneados_temporalmente_usu_id_fkey" FOREIGN KEY ("usu_id") REFERENCES "Usuario"("usu_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuarios_Baneados_temporalmente" ADD CONSTRAINT "Usuarios_Baneados_temporalmente_adm_id_fkey" FOREIGN KEY ("adm_id") REFERENCES "Administrdor"("adm_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuarios_Baneados_permanentemente" ADD CONSTRAINT "Usuarios_Baneados_permanentemente_usu_id_fkey" FOREIGN KEY ("usu_id") REFERENCES "Usuario"("usu_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Usuarios_Baneados_permanentemente" ADD CONSTRAINT "Usuarios_Baneados_permanentemente_adm_id_fkey" FOREIGN KEY ("adm_id") REFERENCES "Administrdor"("adm_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reportes" ADD CONSTRAINT "Reportes_adm_id_fkey" FOREIGN KEY ("adm_id") REFERENCES "Administrdor"("adm_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reportes" ADD CONSTRAINT "Reportes_usu_id_fkey" FOREIGN KEY ("usu_id") REFERENCES "Usuario"("usu_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estado_reporte" ADD CONSTRAINT "Estado_reporte_rep_id_fkey" FOREIGN KEY ("rep_id") REFERENCES "Reportes"("rep_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alcaldia" ADD CONSTRAINT "Alcaldia_rep_id_fkey" FOREIGN KEY ("rep_id") REFERENCES "Reportes"("rep_id") ON DELETE RESTRICT ON UPDATE CASCADE;
